import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';
import { FixedSizeList } from 'react-window';

// Для drag-and-drop
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Компонент для перетаскивания заголовков
const DraggableHeader = ({ column, index, moveColumn, toggleVisibility, isVisible }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: 'column',
    hover(item, monitor) {
      if (item.index !== index) {
        moveColumn(item.index, index);
        item.index = index;
      }
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'column',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        background: '#f0f0f0',
        borderBottom: '1px solid #ccc',
      }}
    >
      <input
        type="checkbox"
        checked={isVisible}
        onChange={() => toggleVisibility(column.id)}
        style={{ marginRight: '8px' }}
      />
      {column.render('Header')}
    </div>
  );
};

const LightTable = ({
  columns: initialColumns,
  rows,
  onChange,
  availableColumns,
  initialOrder,
}) => {
  const [columns, setColumns] = useState(initialColumns);
  const [columnOrder, setColumnOrder] = useState(initialOrder || initialColumns.map(col => col.accessor));
  const [columnVisibility, setColumnVisibility] = useState(() => {
    const visibilityMap = {};
    initialColumns.forEach(col => {
      visibilityMap[col.accessor] = true;
    });
    return visibilityMap;
  });

  // Обновление порядка колонок
  const moveColumn = useCallback((fromIndex, toIndex) => {
    const newOrder = [...columnOrder];
    const [moved] = newOrder.splice(fromIndex, 1);
    newOrder.splice(toIndex, 0, moved);
    setColumnOrder(newOrder);
  }, [columnOrder]);

  // Переключение видимости колонок
  const toggleVisibility = (accessor) => {
    setColumnVisibility(prev => {
      const newVis = { ...prev, [accessor]: !prev[accessor] };
      return newVis;
    });
  };

  // Создаем колоноки с учетом видимости
  const tableColumns = useMemo(() => {
    // Перестановка колонок по order
    const orderedCols = columnOrder
      .map(acc => columns.find(c => c.accessor === acc))
      .filter(Boolean)
      .map(c => ({ ...c, isVisible: columnVisibility[c.accessor] }));

    // Возвращаем только видимые
    return orderedCols.filter(c => c.isVisible !== false);
  }, [columns, columnOrder, columnVisibility]);

  const data = useMemo(() => rows, [rows]);

  const {
    getTableBodyProps,
    headerGroups,
    rows: tableRows,
    prepareRow,
    allColumns,
  } = useTable(
    {
      columns: tableColumns,
      data,
      defaultColumn: { minWidth: 50, width: 150, maxWidth: 400 },
    },
    useBlockLayout,
    useResizeColumns
  );

  // Передача состояния наружу
  useEffect(() => {
    if (onChange) {
      onChange({
        columnOrder,
        columnVisibility,
        columnWidths: allColumns.reduce((acc, col) => {
          acc[col.id] = col.getResizerProps().style.width;
          return acc;
        }, {}),
        columnPinned: columns.reduce((acc, col) => {
          if (col.isPinned) acc[col.accessor] = col.isPinned;
          return acc;
        }, {}),
      });
    }
  }, [columnOrder, columnVisibility, allColumns, onChange, columns]);

  // Рендеринг заголовков
  const renderHeader = () => (
    <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
      {headerGroups[0].headers.map((header, index) => (
        <div
          key={header.id}
          {...header.getHeaderProps()}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            cursor: 'move',
            padding: '4px',
            background: '#f0f0f0',
            borderRight: '1px solid #ccc',
            position: 'relative',
          }}
        >
          <div {...header.getResizeProps()} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            {header.render('Header')}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      {/* Панель управления колонками */}
      <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '8px' }}>
        {columns.map((col, index) => (
          <DraggableHeader
            key={col.accessor}
            column={col}
            index={index}
            moveColumn={moveColumn}
            toggleVisibility={toggleVisibility}
            isVisible={columnVisibility[col.accessor]}
          />
        ))}
      </div>

      {/* Таблица */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {renderHeader()}
        <div {...getTableBodyProps()} style={{ overflow: 'auto', maxHeight: 400 }}>
          {tableRows.map(row => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} style={{ display: 'flex' }}>
                {row.cells.map(cell => (
                  <div
                    {...cell.getCellProps()}
                    style={{
                      flex: 1,
                      padding: '4px',
                      borderRight: '1px solid #ccc',
                      borderBottom: '1px solid #ccc',
                      minWidth: cell.column.minWidth,
                      maxWidth: cell.column.maxWidth,
                      width: cell.column.width,
                    }}
                  >
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </DndProvider>
  );
};

export default LightTable;