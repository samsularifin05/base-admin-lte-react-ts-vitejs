import Skeleton from "react-loading-skeleton";
import React from "react";

interface props {
  title: string;
  footer?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<props> = (props) => (
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">
        {props.loading ? <Skeleton height={20} width={80} /> : props.title}
      </h3>
    </div>
    <div className="card-body">
      {props.loading ? (
        // Display skeleton while loading
        <Skeleton height={300} />
      ) : (
        props.children // Render actual content when data is available
      )}
    </div>
    {props.footer && <div className="card-footer">{props.footer}</div>}
  </div>
);

export default Card;
