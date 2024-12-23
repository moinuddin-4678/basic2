import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile({ profile }) {
  return (
    <Card className='col-md-2 m-1'> 
      <Card.Img variant="top" src={profile.img} />
      <Card.Body>
        <Card.Title>{profile.name}</Card.Title>
        <Card.Text>
          {profile.disc}
        </Card.Text>
        <a href={profile.btnbody} target='_'><Button variant="primary">{profile.btn}</Button></a>
      </Card.Body>
    </Card>
  )
}
export default Profile;