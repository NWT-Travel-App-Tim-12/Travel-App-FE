import React, { useEffect, useContext } from "react";
import { Tabs } from "antd";
import { AdminBookingList } from "../components/AdminBookingList";
import { AdminAgencyList } from "../components/AdminAgencyList";
import { AdminRegionList } from "../components/AdminRegionList";
import { AdminCurrencyList } from "../components/AdminCurrencyList";
import { AdminServiceList } from "../components/AdminServiceList";
import { AdminPackageList } from "../components/AdminPackageList";
import { AdminUserList } from "../components/AdminUserList";
import { AdminItineraryList } from "../components/AdminItineraryList";
import { UserContext } from "../App";
const { TabPane } = Tabs;

function AdminScreen() {
  const value = useContext(UserContext);
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
        <TabPane tab="Currencies" key="4">
          <AdminCurrencyList />
        </TabPane>
        <TabPane tab="Services" key="5">
          <AdminServiceList />
        </TabPane>
        <TabPane tab="Itineraries" key="6">
          <AdminItineraryList />
        </TabPane>
        {value?.user?.role === "admin" && (
          <>
            <TabPane tab="Agencies" key="7">
              <AdminAgencyList />
            </TabPane>
            <TabPane tab="Users" key="8">
              <AdminUserList />
            </TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
}
export default AdminScreen;
