import { Button, Tooltip } from 'antd';
import { FC } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import style from 'components/calendar/calendarHeader/CalendarHeader.module.scss';

type Props = {
  canGoNext?: boolean;
  canGoPrev?: boolean;
  onPrevClick(): void;
  onNextClick(): void;
};

const CalendarHeader: FC<Props> = ({
  canGoNext = true,
  canGoPrev = true,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className={style.header}>
      <span>Header title</span>
      <div>
        <Tooltip title="Previous week">
          <Button
            type="primary"
            shape="circle"
            disabled={!canGoPrev}
            onClick={onPrevClick}
            icon={<LeftOutlined />}
          />
        </Tooltip>
        <Tooltip title="Next week">
          <Button
            type="primary"
            shape="circle"
            disabled={!canGoNext}
            onClick={onNextClick}
            icon={<RightOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default CalendarHeader;
