/*! mazha的开发.email:5345623132123 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./app/index.jsx":
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar appState = {\n    title: {\n        text: 'this is title',\n        color: 'red'\n    },\n    content: {\n        text: 'this is content',\n        color: 'blue'\n    }\n};\n\nfunction stateChanger(state, action) {\n    switch (action.type) {\n        case 'UPDATE_TITLE_TEXT':\n            state.title.text = action.text;\n            break;\n        case 'UPDATE_TITLE_COLOR':\n            state.title.color = action.color;\n            break;\n        default:\n            break;\n    }\n}\n\nfunction renderApp(appState) {\n    console.log('render app');\n    renderTitle(appState.title);\n    renderContent(appState.content);\n}\n\nfunction renderTitle(title) {\n    console.log('render title');\n    var titleDOM = document.getElementById('title');\n    titleDOM.innerHTML = title.text;\n    titleDOM.style.color = title.color;\n}\n\nfunction renderContent(content) {\n    console.log('render content');\n    var contentDOM = document.getElementById('content');\n    contentDOM.innerHTML = content.text;\n    contentDOM.style.color = content.color;\n}\n\nfunction createStore(state, stateChanger) {\n    var listeners = [];\n    var subscribe = function subscribe(listener) {\n        return listeners.push(listener);\n    };\n    var getState = function getState() {\n        return state;\n    };\n    var dispatch = function dispatch(action) {\n        stateChanger(state, action);\n        listeners.forEach(function (listener) {\n            return listener();\n        });\n    };\n    return { getState: getState, dispatch: dispatch, subscribe: subscribe };\n}\n\nvar store = createStore(appState, stateChanger);\nstore.subscribe(function () {\n    return renderApp(store.getState());\n});\n\nrenderApp(store.getState()); // 首次渲染页面\nstore.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' }); // 修改标题文本\nstore.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }); // 修改标题颜色\n\n//# sourceURL=webpack:///./app/index.jsx?");

/***/ })

},[["./app/index.jsx","manifest"]]]);