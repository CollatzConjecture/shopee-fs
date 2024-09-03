'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Drawer, Button, Grid } from 'antd';
import { MenuOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const getRouteInfo = (path) => {
  switch(path) {
    case '/':
      return { key: '1', title: 'Home' };
    case '/about':
      return { key: '2', title: 'About' };
    case '/contact':
      return { key: '3', title: 'Contact' };
    default:
      return { key: '1', title: 'Home' };
  }
};

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: <Link href="/about">About</Link>,
  },
  {
    key: '3',
    icon: <NotificationOutlined />,
    label: <Link href="/contact">Contact</Link>,
  },
];

export default function AppLayout({ children }) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const { key: selectedKey, title: headerTitle } = getRouteInfo(pathname);
  const screens = useBreakpoint();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {screens.md ? (
        <Sider width={200} className="site-layout">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0, color: '#fff' }}
            items={menuItems}
          />
        </Sider>
      ) : (
        <>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ margin: '16px' }}
          />
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={closeDrawer}
            open={drawerVisible}
            style={{ body: { padding: 0 } }}
          >
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              style={{ height: '100%', borderRight: 0 }}
              items={menuItems}
              onClick={closeDrawer}
            />
          </Drawer>
        </>
      )}
      <Layout>
        <Header 
          className="header" 
          style={{ 
            backgroundColor: '#1890ff', 
            color: '#fff', 
            fontSize: '24px', 
            textAlign: screens.md ? 'left' : 'center'
          }}
        >
          {headerTitle}
        </Header>
        <Content style={{ padding: '0 20px', marginTop: '20px' }}>
          <div 
            className="site-layout-content" 
            style={{ 
              padding: screens.md ? '24px' : '10px', 
              minHeight: 380 
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Jerry Lucas @Shopee 2024</Footer>
      </Layout>
    </Layout>
  );
}