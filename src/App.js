import {useState} from 'react';
import Web3 from 'web3';
import {Container, Button, Card, CardHeader, CardBody, CardFooter, Label, Input, Row, Col} from 'reactstrap';

function App() {

  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState('');

  const [messageValue] = useState('Confirm ownership')
  const [signatureInput, setSignatureInput] = useState('')
  const [signResult, setSignResult] = useState('')
  const [addressOwner, setAddressOwner] = useState('')

  const connectWallet = async () => {
    if(window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" })
      setWeb3(web3);
      const addresses = await web3.eth.getAccounts()
      setAddress(addresses[0])

      window.ethereum.on('accountsChanged', function(addresses){
        setAddress(addresses[0])
      })

    } else {
      alert("Không phát hiện được ví.");
    }
  };

  const signMessage = async () => {
    try {
      const result = await web3.eth.personal.sign(messageValue, address)
      setSignResult(result)
    } catch (e) {
      console.error('err: ', e.message)
    }

  }

  const recoverMessage = async () => {
    try {
      const result = await web3.eth.personal.ecRecover(messageValue, signatureInput)
      setAddressOwner(result)
    } catch (e) {
      console.error('err: ', e.message)
    }
  }

  return (
    <div className="App">
      {!web3 && <Container>
        <Button onClick={() => connectWallet()}>Connect wallet</Button>
      </Container>}
      <Row>
        <Col md="6">
          <Card>
            <CardHeader>Sign message</CardHeader>
            <CardBody>
              <Label>Message: </Label>
              <Input type='text' value={messageValue} disabled/>
              <Button onClick={() => signMessage()} disabled={!web3}>Sign</Button>
            </CardBody>
            <CardFooter>
              <Label>Result: </Label>
              <p>{signResult}</p>
            </CardFooter>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>Recover message</CardHeader>
            <CardBody>
              <Label>Message: </Label>
              <Input type='text' value={messageValue} disabled/>
              <Label>Signature: </Label>
              <Input type='text' value={signatureInput} onChange={(event) => setSignatureInput(event.target.value)}/>
              <Button onClick={() => recoverMessage()}>Recover</Button>
            </CardBody>
            <CardFooter>
              <Label>Address owner: </Label>
              <p>{addressOwner}</p>
            </CardFooter>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;
