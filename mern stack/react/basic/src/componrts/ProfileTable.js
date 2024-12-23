import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";



function ProfileTable({ profiles }) {
    return (
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Github Profile Link</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile,index) => {
          return (
            <tr>
              <td>{index+1}</td>
              <td>{profile.name}</td>
              <td>{profile.desc}</td>
              <td>
                <a href={profile.link} target="_" variant="primary">
                  <Button>Github Profile</Button>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    )
  }
  export default ProfileTable;