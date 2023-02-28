/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* @jsx h */
import {h, createRef, Component, ComponentChild} from 'preact';
import './channel-viewer-app.scss';

export default class ChannelViewerApp extends Component {
  static defaultProps = {
    tokenPlaceholder: 'Please provide a channel viewer Edge Auth token',
    subscribeButtonLabel: 'Subscribe',
    stopButtonLabel: 'Stop',
    muteButtonLabel: 'Mute',
    unmuteButtonLabel: 'Unmute',
    videoId: 'channel-viewer-video'
  };

  state = {
    disposables: [],
    token: new URLSearchParams(location.search).get('token') || '',
    phenix: null,
    channel: null
  };

  videoRef = createRef<HTMLVideoElement>();
  stateRef = createRef<HTMLInputElement>();
  autoMutedRef = createRef<HTMLInputElement>();
  autoPausedRef = createRef<HTMLInputElement>();
  tokenExpiringRef = createRef<HTMLInputElement>();
  authorizedRef = createRef<HTMLInputElement>();
  onlineRef = createRef<HTMLInputElement>();
  loadingRef = createRef<HTMLInputElement>();
  playingRef = createRef<HTMLInputElement>();
  standbyRef = createRef<HTMLInputElement>();
  stoppedRef = createRef<HTMLInputElement>();
  targetLagRef = createRef<HTMLInputElement>();
  lagRef = createRef<HTMLInputElement>();
  resolutionRef = createRef<HTMLInputElement>();

  handleTokenChanged = (e): void => {
    this.setState({token: e.target.value});
  };

  handleSubscribe = (): void => {
    import('@phenixrts/sdk').then(phenix => {
      const channel = phenix.Channels.createChannel({
        videoElement: this.videoRef.current,
        token: this.state.token
      });

      this.setState({
        phenix,
        channel
      });

      this.connectChannelSubjects();
    });
  };

  handleStop = (): void => {
    this.state.channel.stop();
  }

  handleMute = (): void => {
    this.state.channel.mute();
  }

  handleUnmute = (): void => {
    this.state.channel.unmute();
  }

  componentDidUpdate = (): void => {
    this.connectChannelSubjects();
  }

  componentDidMount = (): void => {
    // Make sure SDK is fetched as soon as component is loaded
    import('@phenixrts/sdk').then(() => {
      this.connectChannelSubjects();
    });
  }

  connectChannelSubjects = (): void => {
    const phenix = this.state.phenix;
    const channel = this.state.channel;

    if (!phenix || !channel) {
      return;
    }

    this.state.disposables.forEach(disposable => disposable.dispose());
    this.state.disposables.push(channel.state.subscribe(state => this.stateRef.current.value = phenix.ChannelState[state]));
    this.state.disposables.push(channel.autoMuted.subscribe(autoMuted => this.autoMutedRef.current.value = autoMuted));
    this.state.disposables.push(channel.autoPaused.subscribe(autoPaused => this.autoPausedRef.current.value = autoPaused));
    this.state.disposables.push(channel.tokenExpiring.subscribe(tokenExpiring => this.tokenExpiringRef.current.value = tokenExpiring));
    this.state.disposables.push(channel.authorized.subscribe(authorized => this.authorizedRef.current.value = authorized));
    this.state.disposables.push(channel.online.subscribe(online => this.onlineRef.current.value = online));
    this.state.disposables.push(channel.loading.subscribe(loading => this.loadingRef.current.value = loading));
    this.state.disposables.push(channel.playing.subscribe(playing => this.playingRef.current.value = playing));
    this.state.disposables.push(channel.standby.subscribe(standby => this.standbyRef.current.value = standby));
    this.state.disposables.push(channel.stopped.subscribe(stopped => this.stoppedRef.current.value = stopped));
    this.state.disposables.push(channel.targetLag.subscribe(targetLag => this.targetLagRef.current.value = targetLag.toFixed(2)));
    this.state.disposables.push(channel.lag.subscribe(lag => this.lagRef.current.value = lag.toFixed(2)));
    this.state.disposables.push(channel.resolution.subscribe(resolution => this.resolutionRef.current.value = resolution.toString()));
  }

  render(props, state): ComponentChild {
    return (
      <div className="channel-viewer-app">
        <textarea placeholder={props.tokenPlaceholder} value={state.token} onInput={this.handleTokenChanged} />
        <br />
        <button onClick={this.handleSubscribe} disabled={state.token === ''}>{props.subscribeButtonLabel}</button>
        <button onClick={this.handleStop} disabled={state.channel === null}>{props.stopButtonLabel}</button>
        <button onClick={this.handleMute} disabled={state.channel === null}>{props.muteButtonLabel}</button>
        <button onClick={this.handleUnmute} disabled={state.channel === null}>{props.unmuteButtonLabel}</button>
        <br />
        <video id={props.videoId} ref={this.videoRef} controls muted autoPlay playsInline />
        <br />
        State: <input readOnly ref={this.stateRef} />
        <br />
        Auto Muted: <input readOnly ref={this.autoMutedRef} />
        <br />
        Auto Paused: <input readOnly ref={this.autoPausedRef} />
        <br />
        Token Expiring: <input readOnly ref={this.tokenExpiringRef} />
        <br />
        Authorized: <input readOnly ref={this.authorizedRef} />
        <br />
        Online: <input readOnly ref={this.onlineRef} />
        <br />
        Loading: <input readOnly ref={this.loadingRef} />
        <br />
        Playing: <input readOnly ref={this.playingRef} />
        <br />
        Standby: <input readOnly ref={this.standbyRef} />
        <br />
        Stopped: <input readOnly ref={this.stoppedRef} />
        <br />
        Target Lag: <input readOnly ref={this.targetLagRef} />
        <br />
        Lag: <input readOnly ref={this.lagRef} />
        <br />
        Resolution: <input readOnly ref={this.resolutionRef} />
      </div>
    );
  }
}