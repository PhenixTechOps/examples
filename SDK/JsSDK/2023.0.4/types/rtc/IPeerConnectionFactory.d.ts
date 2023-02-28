import IPeerConnection from './IPeerConnection';
interface IPeerConnectionFactory {
    createPeerConnection(configuration?: RTCConfiguration): Promise<IPeerConnection>;
}
export default IPeerConnectionFactory;
