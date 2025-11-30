import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

{/**Creating the search bar */}
function SearchBar({onSearch}) {

    {/**Functions for handling input and submission */}
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); // Pass the search term to a parent component or handler
    };

    
    {/**Setup search bar as a form */}
      return (
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">Search</Button>
        </Form>
      );

}

export default SearchBar;