import cn from 'classnames';

export const Tabs = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <h1 className="title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn({
                  'is-active': selectedTab.id === tab.id,
                })}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTab.id !== tab.id) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
