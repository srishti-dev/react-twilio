import logo from './logo.svg';
import { useEffect } from 'react';
import { Device } from '@twilio/voice-sdk';
import './App.css';

function App() {
  useEffect(() => {
    const device = new Device(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2RmOGI4NTIyNzZhNTQxNTQ0MzE4N2NmNjVmYmJlZGVmLTE2Mjc4ODk1NzQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiI1ZDIzMGNmMDhiNzNhYzAwMWMzMjAzMTdAYnUiLCJ2b2ljZSI6eyJpbmNvbWluZyI6eyJhbGxvdyI6dHJ1ZX0sIm91dGdvaW5nIjp7ImFwcGxpY2F0aW9uX3NpZCI6IkFQMDdkOGQ2ODE4NzEyODgxMTIxMWJmODE5MDVjNDk2ZTgifX19LCJpYXQiOjE2Mjc4ODk1NzQsImV4cCI6MTYyNzg5MzE3NCwiaXNzIjoiU0tkZjhiODUyMjc2YTU0MTU0NDMxODdjZjY1ZmJiZWRlZiIsInN1YiI6IkFDM2RiMDBmYzYwYWQ5N2IwZTUxMTI4ZjJkMmM0YzU1NWYifQ.-4mprLKi-7L_3p17Iwgkgl79ruD-_xAe9D3uhvk6xI0`, {
        codecPreferences: ['opus', 'pcmu'],
        fakeLocalDTMF: true,
        enableRingingState: true,
    });
    device.on('connect', () => {
        console.log('Call ringing');
    });
    device.on('error', (error) => {
        console.error(error);
    });
    device.on('incoming', (connection) => {
        console.log('Call ringing1');
        connection.accept();
        // do awesome ui stuff here
        // $('#call-status').text("you're on a call!");
    });
    device.on('ready', () => {
        // The device is now ready
        console.log('Twilio.Device is now ready for connections');
    });
    // device.connect();
    device.connect(
        { phoneNumber: '+14087570251' });
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
