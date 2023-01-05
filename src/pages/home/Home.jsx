import React, { useState } from 'react'
import Footer from '../../components/footerSection/Footer'
import Header from '../../components/headerSection/Header'
import Tab from '../../components/tabSection/Tab'
import Delivery from '../../components/delivery/Delivery'
import Dining from '../../components/diningOut/Dining'
import Night from '../../components/nightLife/Night'

const Homepage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

    const getCorrectScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return <Delivery />
            case "Dining Out":
                return <Dining />
            case "Nightlife":
                return <Night />
            default:
                return <Delivery />
        }
    }

  return (
    <div>
      <Header />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  )
}

export default Homepage
