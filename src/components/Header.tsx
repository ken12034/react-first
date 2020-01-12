import * as React from 'react';

const Header = () => {
  // 宣告一個新的 state 變數，我們稱作為「count」。
  const [count, setCount] = React.useState(0);

  /**
   * 如果你熟悉 React class 的生命週期方法
   * 你可以把 useEffect 視為 componentDidMount，componentDidUpdate 和 componentWillUnmount 的組合。
   */
  // 你告訴 React 你的 component 需要在 render 後做一些事情

  // 你可能會發現把 effect 想成發生在「render 之後」更為容易，
  // 而不是考慮「mount」和「更新」。 React 保證 DOM 在執行 effect 時已被更新。


  React.useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    console.log(count);
    document.title = `You clicked ${count} times`;
  });

  function addHandlerClick() {
    setCount(count + 1)
  };

  return (
    
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addHandlerClick()}>
        Click me
      </button>
    </div>
  );
}


export default Header;