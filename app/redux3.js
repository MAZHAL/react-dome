
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

/*function stateChanger (state, action) {
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
}*/

function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            var title =state.title;
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            var title =  state.title;
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...title
                   ,
                    color: action.color
                }
            }
        default:
            return state // 没有修改，返回原来的对象
    }
}

function renderApp (appState,oldAppState ={}) {
    if(appState === oldAppState){
        return ;
    }
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle (title,oldTitle) {
    if (title === oldTitle) {
        return ;
    }
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent (content, oldContent) {
    if (content === oldContent){
        return ;
    }
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
        state = stateChanger(state, action);
        listeners.forEach((listener) => listener())
    };
    return { getState, dispatch, subscribe }
}

const store = createStore(appState, stateChanger);
store.subscribe(() => {
    const newState = store.getState();// 数据可能变化，获取新的 state
    renderApp(newState, oldState);// 把新旧的 state 传进去渲染
    oldState = newState
});

renderApp(store.getState()); // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' }) ;// 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) ;// 修改标题颜色
