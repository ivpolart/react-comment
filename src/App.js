
import React, {Component} from 'react';
import Title from '../src/title/title';
import Services from '../src/services/services';
import PostAddForm from '../src/post-add/post-add';
import './App.css';
import PostList from '../src/post-list/post-list';
import ReviewTitle from '../src/review-title/review-title';




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Самуил', date: '13 октября 2011', review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'},
                {name: 'Лилия Семёновна', date: '14 октября 2011', review: 
                'Вероника, здравствуйте! Есть такой вопрос:Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'},
                {name: 'Лилия Семёновна', date: '14 октября 2011', review: 'Вероника, здравствуйте! Есть такой вопрос:Особый вид куниц жизненно стабилизирует кинетический момент?'}
              ]
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(body) {
        const now = new Date();
        const month = now.toLocaleString('default', { month: 'long' }); 
        const today = now.getDay() + ' ' + month + ' ' + now.getFullYear();
    
        const newItem = {
            name: 'Иван Полозков',
            date: today,
            review: body
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
  
    render () {
        return (
            <div className="react">
                <Title />
                <Services />
                <ReviewTitle />  
                <PostList reviews={this.state.data}/>
                <PostAddForm onAdd={this.addItem} />
            </div>
            
          );
        }
    }