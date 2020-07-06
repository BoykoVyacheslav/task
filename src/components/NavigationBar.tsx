import * as React from 'react';

const menu: NavItem[] = [ // mock data for presentation
  { title: 'link1' },
  {
    title: 'link2',
    children: [
      { title: 'link21' },
      { title: 'link22' },
      { title: 'link23' },
    ]
  },
  {
    title: 'link3',
    children: [
      { title: 'link31' },
      {
        title: 'link32', children: [
          { title: 'link321' },
          { title: 'link322' }
        ]
      },
      { title: 'link33' },
    ]
  },
  {
    title: 'link4',
    children: [
      { title: 'link41' },
      { title: 'link42' },
      { title: 'link43' },
    ]
  },
];

type NavItem = {
  title: string;
  children?: NavItem[];
}

interface Props {
  header?: React.ReactChild;
}

interface State {
  menu: NavItem[];
  activeIdx?: number | null;
  navArray: number[]
}

export class NavigationBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menu: [],
      navArray: []
    }
  }

  componentDidMount(): void {
    this.setState({ menu }) // could be used for external API call
  }

  renderItem = (item: NavItem, currIdx: number, nestingLvl: number) => {
    const { navArray } = this.state;
    return (
        <>
          <li key={ item.title }
              className="nav-item"
              onClick={ () => {
                console.log(item.title);
                item.children && this.selectItem(currIdx, nestingLvl);
              }}>
            <span>{ item.title }</span>
          </li>
          { item.children && navArray[nestingLvl] === currIdx &&
          <ul>
            { item.children.map((it, idx) => this.renderItem(it, idx, nestingLvl++ )) }
          </ul>
          }
        </>
    )
  };

  selectItem = (currIdx: number, nestingLvl: number) => {
    const { navArray } = this.state;
    const route = navArray.slice(0, nestingLvl); // used to build nesting route
    route.push(currIdx);
    this.setState({ navArray: route })
  };

  render(): React.ReactNode {
    const { menu } = this.state;
    const { header } = this.props;
    return (
        <aside className="left-sidebar">
          { header }
          <nav>
            <ul>
              { menu && menu.map((it, idx) => this.renderItem(it, idx, 0)) }
            </ul>
          </nav>
        </aside>
    )
  }
}