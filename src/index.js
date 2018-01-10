import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';
const app = express();


app.use(express.static('public'));
app.get('*', (req, res) => {
	const store = createStore();
	const promisse = matchRoutes(Routes,req.path).map(({route})=>{
		return route.loadData ? route.loadData(store) : null;
	});
	console.log(promisse);
	res.send(renderer(req,store));
});

app.listen(3000, () => {
	console.log('Listening port 3000');
});
