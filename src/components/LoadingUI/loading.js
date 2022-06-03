import React from 'react'
import ReactLoading from 'react-loading'

// Loading Types
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes

function loading() {
  return <ReactLoading type={'spin'} color={'blue'} height={667} width={375} />
}

export default loading
