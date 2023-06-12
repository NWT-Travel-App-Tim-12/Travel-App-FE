import React, { useEffect } from "react";
import { Tabs } from "antd";
import { AdminBookingList } from "../components/AdminBookingList";
import { AdminAgencyList } from "../components/AdminAgencyList";
import { AdminRegionList } from "../components/AdminRegionList";
import { AdminCurrencyList } from "../components/AdminCurrencyList";
import { AdminServiceList } from "../components/AdminServiceList";
import { AdminPackageList } from "../components/AdminPackageList";
import { AdminUserList } from "../components/AdminUserList";
import { AdminItineraryList } from "../components/AdminItineraryList";

const { TabPane } = Tabs;

function AdminScreen() {
  useEffect(() => {
    // if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
    //     window.location.href = "/home";
    // }
  }, []);

  return (
    <div>
      <h1>
        <b>Admin panel</b>
      </h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Regions" key="1">
          <AdminRegionList />
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <AdminBookingList />
        </TabPane>
        <TabPane tab="Packages" key="3">
          <AdminPackageList />
        </TabPane>
        <TabPane tab="Agencies" key="4">
          <AdminAgencyList />
        </TabPane>
        <TabPane tab="Users" key="5">
          <AdminUserList />
        </TabPane>
        <TabPane tab="Currencies" key="6">
          <AdminCurrencyList />
        </TabPane>
        <TabPane tab="Services" key="7">
          <AdminServiceList />
        </TabPane>
        <TabPane tab="Itineraries" key="8">
          <AdminItineraryList />
        </TabPane>
      </Tabs>
    </div>
  );
}
export default AdminScreen;
