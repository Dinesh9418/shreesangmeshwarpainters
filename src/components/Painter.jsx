const SKIN = '#E8A874'
const HAT = '#FFC229'
const HAT_SHADOW = '#E8A61C'
const SHIRT = '#C24B3F'
const OVERALLS = '#4A4E69'
const HAIR = '#3A2A20'

function Arms({ pose }) {
  const sleeve = { stroke: SHIRT, strokeWidth: 26, strokeLinecap: 'round', fill: 'none' }
  const hand = { fill: SKIN }

  switch (pose) {
    case 'tipHat':
      return (
        <g>
          {/* left arm resting at hip */}
          <path d="M100 195 Q80 230 92 262" {...sleeve} />
          <circle cx="93" cy="266" r="15" {...hand} />
          {/* right arm up touching hat brim */}
          <path d="M202 195 Q222 150 198 100" {...sleeve} />
          <circle cx="196" cy="93" r="15" {...hand} />
        </g>
      )
    case 'shout':
      return (
        <g>
          <path d="M96 195 Q76 165 118 128" {...sleeve} />
          <circle cx="121" cy="124" r="15" {...hand} />
          <path d="M206 195 Q226 165 184 128" {...sleeve} />
          <circle cx="181" cy="124" r="15" {...hand} />
        </g>
      )
    case 'thinking':
      return (
        <g>
          <path d="M100 195 Q82 232 96 262" {...sleeve} />
          <circle cx="97" cy="266" r="15" {...hand} />
          <path d="M204 195 Q226 172 176 146" {...sleeve} />
          <circle cx="172" cy="144" r="15" {...hand} />
        </g>
      )
    case 'pointUp':
      return (
        <g>
          <path d="M100 195 Q82 230 94 262" {...sleeve} />
          <circle cx="95" cy="266" r="15" {...hand} />
          <path d="M204 195 Q226 130 202 70" {...sleeve} />
          <circle cx="200" cy="64" r="15" {...hand} />
          <rect x="195" y="30" width="10" height="30" rx="5" fill={SKIN} />
        </g>
      )
    case 'roller':
    default:
      return (
        <g>
          {/* left arm crossed at torso */}
          <path d="M98 195 Q78 225 138 240" {...sleeve} />
          <circle cx="142" cy="241" r="15" {...hand} />
          {/* right arm bent up holding a roller */}
          <path d="M206 195 Q234 165 222 118" {...sleeve} />
          <circle cx="220" cy="112" r="15" {...hand} />
          <g transform="rotate(-18 230 95)">
            <rect x="222" y="60" width="8" height="45" rx="4" fill="#8a5a34" />
            <rect x="210" y="48" width="34" height="16" rx="6" fill="#F2703C" />
          </g>
        </g>
      )
  }
}

export default function Painter({ pose = 'roller', className = '' }) {
  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-hidden="true">
      <Arms pose={pose} />

      {/* torso */}
      <rect x="72" y="168" width="156" height="150" rx="46" fill={SHIRT} />
      {/* overalls straps */}
      <rect x="112" y="150" width="16" height="46" rx="7" transform="rotate(-10 120 173)" fill={OVERALLS} />
      <rect x="172" y="150" width="16" height="46" rx="7" transform="rotate(10 180 173)" fill={OVERALLS} />
      {/* overalls bib */}
      <rect x="112" y="188" width="76" height="90" rx="16" fill={OVERALLS} />
      <rect x="130" y="204" width="16" height="16" rx="3" fill="#3A3D57" />

      {/* neck */}
      <rect x="134" y="132" width="32" height="34" fill={SKIN} />

      {/* head */}
      <circle cx="150" cy="100" r="54" fill={SKIN} />
      {/* ears */}
      <circle cx="97" cy="102" r="9" fill={SKIN} />
      <circle cx="203" cy="102" r="9" fill={SKIN} />

      {/* simple beard/jaw shadow */}
      <path d="M112 118 Q150 158 188 118 Q188 142 150 150 Q112 142 112 118 Z" fill={HAIR} opacity="0.85" />

      {/* eyes */}
      <circle cx="130" cy="96" r="5.5" fill={HAIR} />
      <circle cx="170" cy="96" r="5.5" fill={HAIR} />
      {/* eyebrows */}
      <rect x="119" y="80" width="20" height="5" rx="2.5" fill={HAIR} />
      <rect x="161" y="80" width="20" height="5" rx="2.5" fill={HAIR} />

      {/* mouth */}
      <path d="M136 118 Q150 128 164 118" stroke={HAIR} strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* hard hat */}
      <path d="M84 84 A66 58 0 0 1 216 84 Z" fill={HAT} />
      <rect x="76" y="80" width="148" height="16" rx="8" fill={HAT_SHADOW} />
      <rect x="140" y="42" width="20" height="10" rx="4" fill={HAT_SHADOW} />
    </svg>
  )
}
