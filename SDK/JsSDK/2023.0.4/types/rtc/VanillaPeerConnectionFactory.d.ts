import IPeerConnectionFactory from './IPeerConnectionFactory';
import IPeerConnection from './IPeerConnection';
declare class VanillaPeerConnectionFactory implements IPeerConnectionFactory {
    createPeerConnection(configuration?: RTCConfiguration): Promise<IPeerConnection>;
}
export default VanillaPeerConnectionFactory;
