import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

import TopNavBar from './components/reactnavbar.jsx';
import SearchBar from './components/searchbar.jsx';
import SpaceCard from './components/spacecard.jsx';

import studyData from './studyspaces.json';

function App() {

  /**Handle filtering when inputting text */
  const [data, setData] = useState(studyData);

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (term) => {
      const lowercasedTerm = term.toLowerCase();
      const newFilteredData = data.filter(item =>
          item.name.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredData(newFilteredData);
  };

  return (
    
    
    <>
      <TopNavBar/>

      {/*Landing section */}
      <h1 className='py-5'>StudyHere</h1>
      <p>Let's study here.</p>
      <SearchBar onSearch={handleSearch} />

      <br/>

      {/**Map list of study spaces */}
      <Container>
        <Row className="g-4">
          {filteredData.map(item => (
              
              <Col key={item.id}>
                <SpaceCard cardImage={item.image} cardName={item.name} cardCampus={item.campus} cardCapacity={item.capacity}/>
              </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default App
