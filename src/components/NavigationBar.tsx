import * as React from 'react';

type NavItem = {
  title: string;
  children?: NavItem[];
}

interface Props {
  header?: React.ReactChild;
  menu: NavItem[];
}

class SubMenu extends React.Component<{ item: NavItem }, { opened: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      opened: false,
    }
  }

  render() {
    const { item } = this.props;
    const { opened } = this.state;

    return (
        <>
          <li className="nav-item"
              onClick={() => {
                console.log(item.title);
                this.setState({ opened: !opened })
              }}>{item.title}
          </li>
          { item.children && opened &&
          <ul>{
            item.children.map(it => <SubMenu item={it}/>)
          }</ul>}
        </>
    )
  }
}

export const NavigationBar: React.FC<Props> = ({ header, menu }) => {
  return (
      <aside className="left-sidebar">
        { header }
        <nav>
          <ul>
            { menu && menu.map(it => <SubMenu item = { it }/>) }
          </ul>
        </nav>
      </aside>
  )
};