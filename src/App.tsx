import { Menu, ConfigProvider } from 'antd'

function App() {
 const items = [
  {
    key: '0',
    label: <span style={{ color: 'black'}}>all of this</span>,
    children: [
      {
        key: '1',
        label: 'hello',
        type: 'group',
        children: [
          {
            key: '1-2',
            label: 'hello-1',
            type: 'item',
            // if you remove this, onClick will be invoked as expected
            children: []
          },
          {
            key: '1-3',
            label: 'hello-2',
            type: 'item',
            // if you remove this, onClick will be invoked as expected
            children: []
          }
        ]
      },
    ]
  }
  
 ];

 const onClick = () => {
  console.log('onClick is invoked')
 }

 return (
  <ConfigProvider 
    theme={{
      components: {
        Menu: {
          itemSelectedColor: '#ff6a00',
          itemSelectedBg: '#fff1e0',
          itemBorderRadius: 2
        },
      },
    }}
  >
    <Menu 
      items={items}
      mode='inline'
      theme='light'
      onClick={onClick}
      selectedKeys={['1-2']}
      openKeys={['0', '1', '1-2']}
      expandIcon={null}
    />
  </ConfigProvider>
  
 )
}

export default App
