import React from 'react';
import OnlyAuth from '../../components/OnlyAuth';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';
import Header from '../../components/header/Header.component'
import './FullProfile.style.scss'
import History from './tabs/History.tab'
import General from './tabs/General.tab'
import Shop from './tabs/Shop.tab'
const tabTitle = (title) => (<div className="tab-bar-title" data-extra="tab-bar-title">{`${title}`}</div>);
class ProfilePage extends React.Component {
    render() {
        return (
            <OnlyAuth>
                <Header
                    height={250}
                    renderContent={
                        <div className="user">
                            <img
                                className="user-avatar"
                                src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/43108023_10156194198864608_6077071487649447936_n.jpg?_nc_cat=100&_nc_ht=scontent-otp1-1.xx&oh=3fc44eadb9429e451c83c041fb5aa365&oe=5C7804B6"
                            />
                            <h1>Alexandru Pavaloi</h1>
                            <p>Level: <span>Hardcore donor</span></p>
                        </div>
                    }/>
                <div className="container" style={{ top: '326px' }}>
                    <Tabs
                        renderTabBar={() =>
                        <SwipeableInkTabBar
                            pageSize={3}
                            speed={5}
                        />
                        }
                        renderTabContent={() => <TabContent/>}
                        defaultActiveKey="1"
                    >
                        <TabPane tab={tabTitle("General")} data-extra="tabpane" key='1'>
                            <General />
                        </TabPane>
                        <TabPane tab={tabTitle("Puncte")} data-extra="tabpane" key='2'>
                            <Shop />
                        </TabPane>
                        <TabPane tab={tabTitle("Istoric")} data-extra="tabpane" key='3'>
                            <History />
                        </TabPane>
                    </Tabs>
                </div>
            </OnlyAuth>
        )
    }
}

export default ProfilePage;
