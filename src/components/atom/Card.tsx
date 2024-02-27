import Skeleton from "react-loading-skeleton";
import React, { memo } from "react";

interface props {
  title: string;
  footer?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<props> = (props) => {
  const { title, footer, loading, children } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          {loading ? <Skeleton height={20} width={80} /> : title}
        </h3>
      </div>
      <div className="card-body">
        {loading ? <Skeleton height={300} /> : children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default memo(Card);
