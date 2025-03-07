import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
function ProfileTable({ profiles, set , setProfiles  }) {

  function getSingleData(id) {
    fetch('http://localhost:8000/profile/' + id)
      .then((formdata) => {
        return formdata.json();
      })
      .then((formdata) => {
        set(formdata)
      })
      .catch((error) => { console.log(error) })
  }
  function profiledelete(id) {
    fetch('http://localhost:8000/profiledelete/'+ id , {
      method: 'delete',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProfiles(res)

      })
      .catch((error) => { console.log(error) })
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Github Profile Link</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{profile.name}</td>
              <td>{profile.desc}</td>
              <td>
                <a href={profile.link} target="_" variant="primary">
                  <Button>Github Profile</Button>
                </a>
              </td>
              <td >
                <Button className="m-2" onClick={() => {getSingleData(profile.id)}}>Edit</Button>
                <Button onClick={() => {profiledelete(profile.id)}}>delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  )
}
export default ProfileTable;