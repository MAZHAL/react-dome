
let appState = {
    title: {
        text: 'this is title',
        color: 'red',
    },
    content: {
        text: 'this is content',
        color: 'blue'
    }
};

function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break
    }
}

function renderApp (appState) {
    console.log('render app');
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle (title) {
    console.log('render title');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent (content) {
    console.log('render content');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}



function createStore (state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener) => listener())
    };
    return { getState, dispatch, subscribe }
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState()));

renderApp(store.getState()); // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' }) ;// 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) ;// 修改标题颜色
