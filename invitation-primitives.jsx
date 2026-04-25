// invitation-primitives.jsx — shared UI atoms across mood variants

// ─── Section header: small overline + title + rule
function SectionHead({ en, ko, style = {}, align = 'center', variant = 'minimal' }) {
  const c1 = variant === 'mono' ? '#1C222B' : 'var(--slate-950)';
  const c2 = variant === 'mono' ? 'rgba(28,34,43,0.5)' : 'var(--slate-500)';
  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: 10, ...style }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
        fontSize: 14, letterSpacing: '0.14em', color: c2,
      }}>{en}</div>
      <div style={{ width: 18, height: 1, background: c2, opacity: 0.5 }} />
      <div style={{
        fontSize: 18, fontWeight: 500, letterSpacing: '0.24em',
        color: c1,
      }}>{ko}</div>
    </div>
  );
}

// ─── Softly-bordered card container
function PaperCard({ children, style = {}, variant = 'minimal' }) {
  const bg = variant === 'warm' ? '#FBF8F3' : variant === 'mono' ? '#FFFFFF' : '#FFFFFF';
  const border = variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-150)';
  return (
    <div style={{
      background: bg, border, borderRadius: variant === 'mono' ? 0 : 12,
      padding: 20, ...style,
    }}>{children}</div>
  );
}

// ─── Image with graceful loading (uses object-fit cover)
function Photo({ src, alt = '', ratio = '1/1', style = {}, rounded = true }) {
  return (
    <div style={{
      width: '100%', aspectRatio: ratio, overflow: 'hidden',
      borderRadius: rounded ? 4 : 0, background: 'var(--slate-75)',
      position: 'relative', ...style,
    }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: style.filter || 'none',
        }}
      />
    </div>
  );
}

// ─── Icon (inline svg from /icons/)
function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.5 }) {
  // Inline common icons to avoid per-call fetches.
  const paths = {
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M3 9h18M8 3v4M16 3v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/></>,
    pin: <><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/></>,
    clock: <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M12 7v5l3 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" stroke={color} strokeWidth={strokeWidth} fill="none"/></>,
    phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/></>,
    message: <><path d="M21 12a8 8 0 11-3.2-6.4L21 5l-.6 3.2A8 8 0 0121 12z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/></>,
    share: <><circle cx="6" cy="12" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/><circle cx="18" cy="6" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/><circle cx="18" cy="18" r="2.5" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M8 11l8-4M8 13l8 4" stroke={color} strokeWidth={strokeWidth}/></>,
    chevron: <path d="M9 6l6 6-6 6" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    chevronDown: <path d="M6 9l6 6 6-6" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
    heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/>,
    plus: <path d="M12 5v14M5 12h14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>,
    map: <><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/><path d="M9 4v14M15 6v14" stroke={color} strokeWidth={strokeWidth}/></>,
    subway: <><rect x="5" y="3" width="14" height="15" rx="3" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M5 13h14M8 7h8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/><circle cx="9" cy="16" r=".8" fill={color}/><circle cx="15" cy="16" r=".8" fill={color}/><path d="M8 18l-2 3M16 18l2 3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/></>,
    bus: <><rect x="4" y="4" width="16" height="14" rx="2" stroke={color} strokeWidth={strokeWidth} fill="none"/><path d="M4 11h16M8 4v-1M16 4v-1" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/><circle cx="8" cy="15" r="1" fill={color}/><circle cx="16" cy="15" r="1" fill={color}/><path d="M7 18v2M17 18v2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/></>,
    car: <><path d="M5 16v3M19 16v3M4 13l2-5a2 2 0 012-1h8a2 2 0 012 1l2 5M4 13v4h16v-4M4 13h16" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round"/><circle cx="8" cy="15" r=".8" fill={color}/><circle cx="16" cy="15" r=".8" fill={color}/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      {paths[name]}
    </svg>
  );
}

// ─── Calendar grid — single month view with the wedding date marked
function MonthCalendar({ year, month, day, variant = 'minimal' }) {
  // month: 1-indexed
  const first = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startWeekday = first.getDay(); // 0=Sun
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weekdayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const accent = variant === 'mono' ? '#111' : 'var(--fg-1)';
  const sundayColor = variant === 'mono' ? '#111' : 'var(--red-600)';
  const muted = variant === 'mono' ? 'rgba(17,17,17,0.35)' : 'var(--slate-400)';

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
        fontSize: 10, letterSpacing: '0.1em', color: muted,
        textAlign: 'center', paddingBottom: 10, fontWeight: 500,
      }}>
        {weekdayLabels.map((w, i) => (
          <div key={w} style={{ color: i === 0 ? sundayColor : muted }}>{w}</div>
        ))}
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '10px 0', textAlign: 'center', fontSize: 14,
      }}>
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const isSun = (i % 7) === 0;
          const isTarget = d === day;
          return (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isTarget
                  ? (variant === 'mono' ? '#fff' : '#fff')
                  : (isSun ? sundayColor : accent),
                background: isTarget
                  ? (variant === 'mono' ? '#111' : 'var(--slate-950)')
                  : 'transparent',
                fontWeight: isTarget ? 600 : 400,
                fontVariantNumeric: 'tabular-nums',
              }}>{d}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Countdown ticker: days / hours / minutes / seconds to ISO date
function useCountdown(iso) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = new Date(iso).getTime();
  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

// ─── Tiny sketch map (placeholder — roads + pin)
function SketchMap({ variant = 'minimal' }) {
  const stroke = variant === 'mono' ? '#111' : '#AFBACA';
  const bg = variant === 'warm' ? '#F6F1E8' : variant === 'mono' ? '#FAFAFA' : '#F8F9FB';
  const accent = variant === 'mono' ? '#111' : '#2277FF';
  return (
    <svg viewBox="0 0 340 200" style={{
      width: '100%', height: 'auto', display: 'block',
      background: bg, borderRadius: variant === 'mono' ? 0 : 8,
      border: variant === 'mono' ? '1px solid #111' : '1px solid var(--slate-150)',
    }}>
      {/* streets */}
      <path d="M0,60 L340,40" stroke={stroke} strokeWidth="6" fill="none" opacity="0.4"/>
      <path d="M0,60 L340,40" stroke="#fff" strokeWidth="0.6" strokeDasharray="4 4" fill="none"/>
      <path d="M80,0 L110,200" stroke={stroke} strokeWidth="4" fill="none" opacity="0.35"/>
      <path d="M220,0 L250,200" stroke={stroke} strokeWidth="3" fill="none" opacity="0.3"/>
      <path d="M0,140 Q170,120 340,150" stroke={stroke} strokeWidth="3" fill="none" opacity="0.3"/>
      {/* blocks */}
      <rect x="20" y="70" width="60" height="50" fill={stroke} opacity="0.08" />
      <rect x="130" y="80" width="70" height="50" fill={stroke} opacity="0.08" />
      <rect x="260" y="75" width="60" height="50" fill={stroke} opacity="0.08" />
      {/* 석촌역 marker (top-right area) */}
      <g transform="translate(250,42)">
        <circle r="4" fill="#fff" stroke={stroke} strokeWidth="1.5"/>
        <text x="8" y="4" fontSize="9" fill={stroke} fontFamily="Pretendard">석촌역</text>
      </g>
      {/* venue pin — center */}
      <g transform="translate(170,104)">
        <path d="M0,-18 C-8,-18 -12,-12 -12,-6 C-12,2 0,14 0,14 C0,14 12,2 12,-6 C12,-12 8,-18 0,-18 Z"
              fill={accent} />
        <circle r="3" fill="#fff" cy="-7"/>
        <text x="0" y="30" fontSize="11" fill={variant === 'mono' ? '#111' : '#1C222B'} fontWeight="600" textAnchor="middle" fontFamily="Pretendard">라브르에드니아</text>
      </g>
    </svg>
  );
}

Object.assign(window, {
  SectionHead, PaperCard, Photo, Icon, MonthCalendar, useCountdown, SketchMap,
});
