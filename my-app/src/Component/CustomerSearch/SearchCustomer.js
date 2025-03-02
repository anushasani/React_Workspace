import React, { useState } from "react";

const list = [
  {
    name: "Jeremy Clarke",
    age: 21,
    location: "Seattle",
    gender: "Male",
    income: "120,000",
  },
  {
    name: "John Smith",
    age: 25,
    location: "Philadelphia",
    gender: "Male",
    income: "80,000",
  },
];

const SearchCustomer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle filtering based on search term
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the list based on search term (case-sensitive)
  const filteredCustomers = list.filter((customer) =>
    Object.values(customer).some((value) =>
      String(value).startsWith(searchTerm)
    )
  );

  return (
    <div>
      {/* Search input box */}
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search customers..."
      />

      {/* Render customer list or 'No Results Found' */}
      {filteredCustomers.length === 0 ? (
        <div className="no-results">No Results Found</div>
      ) : (
        <table className="searched-customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.location}</td>
                <td>{customer.gender}</td>
                <td>{customer.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchCustomer;
