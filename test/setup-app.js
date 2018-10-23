import { jsdom } from 'jsdom';
import hook from 'css-modules-require-hook';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});
