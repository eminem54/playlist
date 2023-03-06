import React from 'react';
import { useDragLayer } from 'react-dnd';
import styles from './DragLayer.module.scss';
import DragLayoutTemplate from './DragLayoutTemplate';
import { DragVideoItemType } from '@/const/type';
import clsx from 'clsx';
import { XYCoord } from 'react-dnd/src/types/index';

const DragLayer = () => {
  const { itemType, item, isDragging, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      };
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  }
  const renderComponent = (type: any) => {
    switch (type) {
      case DragVideoItemType.VIDEO: {
        return <DragLayoutTemplate />;
      }
      default:
        return null;
    }
  };

  return (
    <div className={styles.layer}>
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderComponent(itemType)}</div>
    </div>
  );
};

export default DragLayer;
