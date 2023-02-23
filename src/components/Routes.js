import Home from './Home/Home';
import Download from './M_Download/Download';
import Movies from './Movies/Movies';
import Movo from './Movies/Movo';

let routes = [
    {path : '/' , element : <Home/>} ,
    {path :'/Movie' , element : <Download></Download>},
    {path : '/Movies' , element : <Movies></Movies>} , 
    {path : '/Movies/:userId' , element : <Movo></Movo>}
    
]

export default routes