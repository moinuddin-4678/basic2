import './App.css';
// import Profile from './componrts/Profile';
import ProfileTable from './componrts/ProfileTable';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")

  const [profiles, setProfiles] = useState([]);

  // const profiles = [
  //   {
  //     name: "Vocab",
  //     img: "https://avatars.githubusercontent.com/u/185526098?v=4",
  //     disc: "I am a Full stack devoloper",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/Vocabstudents"
  //   },
  //   {
  //     name: "Moin",
  //     img: "https://avatars.githubusercontent.com/u/186063909?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/moinuddin-4678"
  //   },
  //   {
  //     name: "Nawaf",
  //     img: "https://avatars.githubusercontent.com/u/182943003?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/Sknawaf05"
  //   },
  //   {
  //     name: "Saad",
  //     img: "https://avatars.githubusercontent.com/u/182938196?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/shk-sam"
  //   },
  //   {
  //     name: "Prience",
  //     img: "https://avatars.githubusercontent.com/u/111479652?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/pri810"
  //   },
  //   {
  //     name: "Tehseen",
  //     img: "https://avatars.githubusercontent.com/u/182941013?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/jiyashah26"
  //   },
  //   {
  //     name: "Rumana",
  //     img: "https://avatars.githubusercontent.com/u/185526264?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/rumanamotiwala"
  //   },
  //   {
  //     name: "Bhaseer",
  //     img: "https://avatars.githubusercontent.com/u/182937907?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/Basheer107"
  //   },
  //   {
  //     name: "Muhammad",
  //     img: "https://avatars.githubusercontent.com/u/185525438?v=4",
  //     disc: "I am learning Mern Stack",
  //     btn: "Open Profile",
  //     btnbody: "https://github.com/gaghamohammad"
  //   }
  // ]
  return (
    <div className="container mt-4">
      <h1>Profiles</h1>
      <div className="row">
        <div className="col-md-8">
          <ProfileTable profiles={profiles} />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3>Create Profile</h3>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { console.log(e); setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" onChange={(e) => { setDesc(e.target.value) }} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e) => { setLink(e.target.value) }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {
                  e.preventDefault()
                  setProfiles((old) => [{
                    name: name,
                    desc: desc,
                    link: link,
                  },
                  ...old
                  ])
                  
                }}>
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
      {
        profiles.map((profile)=>{
          return <Profile profile={profile} />
        })
      }
    </div> */}
      {/* <Btn name="Sign Up"/> */}
    </div>

  );
}
export default App;