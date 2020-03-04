import React from 'react';
import ReactDOM from 'react-dom'
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            
            <AprovalCard>
                <div>
                    <h4>
                        Warning!!!
                    </h4>
                    <p>

                    Are you sure you want to do this?
                    </p>
                </div>
            </AprovalCard>
            
            <AprovalCard>
            
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM"
             content="Ja volim konje" 
             avatar={Faker.image.avatar()}
             />
             </AprovalCard>
             
             <AprovalCard>
            <CommentDetail 
            author="Lalal" 
            timeAgo="Today at 6:45PM"
             content="mrzim te" 
             avatar={Faker.image.avatar()}
             />
             </AprovalCard>

             <AprovalCard>
            <CommentDetail 
            author="Jasmin" 
            timeAgo="Today at 3:45PM"
             content="super cool" 
             avatar={Faker.image.avatar()}
             />
             </AprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))