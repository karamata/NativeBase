require('react-native');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Header=require('./../../src/backward/Widgets/Header');
var _Button=require('./../../src/backward/Widgets/Button');
var _Icon=require('./../../src/backward/Widgets/Icon');
var _Title=require('./../../src/backward/Widgets/Title');
var _Subtitle=require('./../../src/backward/Widgets/Subtitle');var _Subtitle2=_interopRequireDefault(_Subtitle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock('Platform',function(){
var Platform=require.requireActual('Platform');
Platform.OS='android';
return Platform;
});
jest.mock('ScrollView',function(){return'ScrollView';});

it('renders correctly',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null)).
toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null,
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'),

_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-menu'})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with a null button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null,
null,
_react2.default.createElement(_Title.Title,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with buttons and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null,
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'Subtitle'),

_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-menu'})))).


toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null,
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,null,
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'Subtitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button and iconRight',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{iconRight:true},
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'))).

toJSON();
expect(tree).toMatchSnapshot();
});

it('renders header with just one button, iconRight and a subtitle',function(){
var tree=_reactTestRenderer2.default.create(
_react2.default.createElement(_Header.Header,{iconRight:true},
_react2.default.createElement(_Button.Button,{transparent:true},
_react2.default.createElement(_Icon.Icon,{name:'ios-arrow-back'})),


_react2.default.createElement(_Title.Title,null,'Header'),
_react2.default.createElement(_Subtitle2.default,null,'SubTitle'))).

toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.android.js.map