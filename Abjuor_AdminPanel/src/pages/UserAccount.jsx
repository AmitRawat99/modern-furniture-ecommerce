import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import userProfile from '../assets/user/user-profile.png'
import '../style/order.scss'
import Base_Url from '../../../Abjuor_FrontEnd/src/config/Base_Url'


function UserAccount() {
  const [Accounts, setAccounts] = useState([])

  useEffect(() => {
    const userAccounts = async () => {
      try {
        const response = await fetch(`${Base_Url}/all-accounts`)

        if (!response) {
          throw new Error("Netwrok response was not good")
        }

        const data = await response.json()

        if (Array.isArray(data)) {
          setAccounts(data)
        }

        else if (Array.isArray(data.allAccounts)) {
          setAccounts(data.allAccounts)
        }

        else {
          setAccounts([])
        }

        console.log(data.allAccounts, "all acounts");

      } catch (error) {
        console.log("somethink went wrong", error)
      }
    }
    userAccounts()
  }, [])

  return (
    <Container className="my-4">
      <Row>
        {Accounts.map((user) => (
          <Col key={user.id} md={4} className="mb-4">
            <Card className="shadow-sm h-100 p-3">
              <Card.Body>
                <div className="user-name d-flex">
                  <img src={userProfile} alt="" />
                  <div className="user-roles">
                    <Card.Title>{user.userName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Customer</Card.Subtitle>
                  </div>
                </div>
                <Card.Text>
                  <strong>Email:</strong> {user.userEmail} <br />
                  <strong>Phone:</strong> {user.userNumber}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserAccount;

