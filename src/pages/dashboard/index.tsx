import { Card, PanelContent } from "@/components";
import { AppDispatch, useAppSelector, utilityActions } from "@/reduxStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
interface FakturHutang {
  no_faktur_hutang: string;
  kode_barcode: string;
  tgl_system: string;
  harga: number;
  berat: number;
  total: number;
  diskon: string;
  input_by: string;
}

const Dashboard = function () {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      utilityActions.simpanDataTmp<FakturHutang[]>({
        data: [
          {
            no_faktur_hutang: "PS-1231",
            kode_barcode: "string",
            tgl_system: "string",
            harga: 0,
            berat: 0,
            total: 0,
            diskon: "",
            input_by: "",
          },
        ],
      })
    );
  }, [dispatch]);

  const dataTmp = useAppSelector(
    (state) => state.utility.getDataTmp.data as FakturHutang[]
  );

  console.log(dataTmp[0].berat);
  return (
    <PanelContent headerContent title="Dashboard">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h2>75</h2>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-lg-6">
          <Card title="Card 1">ISI</Card>
        </div>
        <div className="col-lg-6 col-lg-6">
          <Card title="Card 2" />
        </div>
      </div>
    </PanelContent>
  );
};
export default Dashboard;
