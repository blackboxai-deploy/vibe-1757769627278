import React from 'react';

interface SVGProps {
  className?: string;
}

export const WagyuIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Steak */}
    <ellipse cx="100" cy="95" rx="45" ry="25" fill="#8b4513"/>
    <ellipse cx="100" cy="93" rx="42" ry="22" fill="#a0522d"/>
    <ellipse cx="100" cy="91" rx="38" ry="18" fill="#cd853f"/>
    {/* Grill marks */}
    <rect x="75" y="85" width="50" height="2" fill="#654321" rx="1"/>
    <rect x="75" y="95" width="50" height="2" fill="#654321" rx="1"/>
    {/* Garnish */}
    <circle cx="130" cy="80" r="8" fill="#228b22"/>
    <circle cx="125" cy="85" r="6" fill="#32cd32"/>
    <rect x="70" y="110" width="15" height="3" fill="#ff6347" rx="1"/>
    <rect x="120" y="108" width="12" height="3" fill="#ff6347" rx="1"/>
  </svg>
);

export const LobsterIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Lobster shell */}
    <ellipse cx="100" cy="95" rx="50" ry="30" fill="#dc143c"/>
    <ellipse cx="100" cy="93" rx="47" ry="27" fill="#ff6347"/>
    {/* Meat */}
    <ellipse cx="100" cy="90" rx="40" ry="20" fill="#fff8dc"/>
    <ellipse cx="100" cy="88" rx="35" ry="15" fill="#fffacd"/>
    {/* Cheese topping */}
    <ellipse cx="100" cy="85" rx="38" ry="18" fill="#ffd700" opacity="0.8"/>
    {/* Garnish */}
    <circle cx="70" cy="75" r="4" fill="#228b22"/>
    <circle cx="130" cy="110" r="5" fill="#ff4500"/>
    <rect x="75" y="115" width="8" height="2" fill="#32cd32"/>
  </svg>
);

export const FoieGrasIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Foie gras */}
    <ellipse cx="100" cy="95" rx="35" ry="20" fill="#deb887"/>
    <ellipse cx="100" cy="93" rx="32" ry="17" fill="#f5deb3"/>
    {/* Brioche */}
    <rect x="80" y="105" width="40" height="8" fill="#daa520" rx="4"/>
    <rect x="82" y="107" width="36" height="4" fill="#ffd700" rx="2"/>
    {/* Fig compote */}
    <circle cx="70" cy="80" r="8" fill="#800080"/>
    <circle cx="130" cy="85" r="6" fill="#9932cc"/>
    {/* Microgreens */}
    <rect x="85" y="70" width="2" height="8" fill="#228b22"/>
    <rect x="110" y="75" width="2" height="6" fill="#32cd32"/>
    <circle cx="86" cy="69" r="2" fill="#90ee90"/>
  </svg>
);

export const CaviarIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Caviar tin */}
    <ellipse cx="100" cy="90" rx="25" ry="15" fill="#2f4f4f"/>
    <ellipse cx="100" cy="88" rx="22" ry="12" fill="#000000"/>
    {/* Caviar pearls */}
    <circle cx="95" cy="88" r="1.5" fill="#1a1a1a"/>
    <circle cx="100" cy="86" r="1.5" fill="#1a1a1a"/>
    <circle cx="105" cy="89" r="1.5" fill="#1a1a1a"/>
    <circle cx="98" cy="91" r="1.5" fill="#1a1a1a"/>
    <circle cx="103" cy="87" r="1.5" fill="#1a1a1a"/>
    {/* Blinis */}
    <circle cx="75" cy="110" r="12" fill="#ffeaa7"/>
    <circle cx="125" cy="110" r="12" fill="#ffeaa7"/>
    {/* Crème fraîche */}
    <ellipse cx="75" cy="108" rx="8" ry="4" fill="#fffef7"/>
    <ellipse cx="125" cy="108" rx="8" ry="4" fill="#fffef7"/>
    {/* Chives */}
    <rect x="72" y="100" width="1" height="8" fill="#228b22"/>
    <rect x="127" y="102" width="1" height="6" fill="#228b22"/>
  </svg>
);

export const TunaIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Tuna tartare ring */}
    <circle cx="100" cy="95" r="30" fill="#dc143c"/>
    <circle cx="100" cy="95" r="27" fill="#ff6347"/>
    <circle cx="100" cy="95" r="24" fill="#ff4500"/>
    {/* Avocado */}
    <ellipse cx="100" cy="92" rx="20" ry="8" fill="#9acd32"/>
    <ellipse cx="100" cy="90" rx="18" ry="6" fill="#adff2f"/>
    {/* Quail egg */}
    <circle cx="100" cy="85" r="6" fill="#fffacd"/>
    <circle cx="100" cy="83" r="4" fill="#ffd700"/>
    {/* Microgreens */}
    <rect x="85" y="75" width="1" height="6" fill="#228b22"/>
    <rect x="115" y="78" width="1" height="5" fill="#32cd32"/>
    <circle cx="85" cy="74" r="1.5" fill="#90ee90"/>
    <circle cx="115" cy="77" r="1.5" fill="#98fb98"/>
    {/* Sauce dots */}
    <circle cx="70" cy="110" r="3" fill="#8b4513"/>
    <circle cx="130" cy="105" r="3" fill="#228b22"/>
  </svg>
);

export const SouffleIllustration: React.FC<SVGProps> = ({ className = "w-32 h-32" }) => (
  <svg className={`${className} food-illustration`} viewBox="0 0 200 200" fill="none">
    {/* Plate */}
    <circle cx="100" cy="100" r="85" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2"/>
    {/* Ramekin */}
    <ellipse cx="100" cy="105" rx="35" ry="25" fill="#e6e6fa"/>
    <ellipse cx="100" cy="100" rx="35" ry="8" fill="#d3d3d3"/>
    {/* Soufflé */}
    <ellipse cx="100" cy="85" rx="32" ry="20" fill="#8b4513"/>
    <ellipse cx="100" cy="80" rx="30" ry="18" fill="#a0522d"/>
    <ellipse cx="100" cy="75" rx="28" ry="15" fill="#d2691e"/>
    {/* Powdered sugar */}
    <circle cx="95" cy="70" r="1" fill="#ffffff" opacity="0.8"/>
    <circle cx="105" cy="72" r="1" fill="#ffffff" opacity="0.8"/>
    <circle cx="100" cy="68" r="1" fill="#ffffff" opacity="0.8"/>
    {/* Ice cream scoop */}
    <circle cx="130" cy="90" r="12" fill="#fffacd"/>
    <circle cx="130" cy="88" r="10" fill="#fff8dc"/>
    {/* Mint */}
    <ellipse cx="125" cy="80" rx="4" ry="2" fill="#228b22"/>
    <ellipse cx="135" cy="82" rx="3" ry="2" fill="#32cd32"/>
    {/* Sauce */}
    <path d="M 70 110 Q 80 105 90 110" stroke="#8b4513" strokeWidth="2" fill="none"/>
  </svg>
);

export const getIllustrationComponent = (image: string) => {
  switch (image) {
    case 'wagyu':
      return WagyuIllustration;
    case 'lobster':
      return LobsterIllustration;
    case 'foiegras':
      return FoieGrasIllustration;
    case 'caviar':
      return CaviarIllustration;
    case 'tuna':
      return TunaIllustration;
    case 'souffle':
      return SouffleIllustration;
    default:
      return WagyuIllustration;
  }
};