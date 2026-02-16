import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import svgPaths from "./svg-jz90vli6ti";
import imgImageKeFlag from "figma:asset/58788f069ecaf0064e44595cbeafe6840d053030.png";
import imgImageVerido from "figma:asset/aaf2c08bd12edb46043b8e248c4f4bcb91476bca.png";

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[#1a1a1a] text-[36px] top-0">Verido Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6c757d] text-[16px] top-[-1px]">{`Welcome back Philip Partner, here's what's happening with your operations today.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-0 top-0 w-[746px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6c757d] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Currency</p>
    </div>
  );
}

function ImageKeFlag() {
  return (
    <div className="h-[22.667px] relative shrink-0 w-full" data-name="Image (ke flag)">
      <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageKeFlag} />
    </div>
  );
}

function FlagIcon() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="FlagIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <ImageKeFlag />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(224,224,224,0.3)] border-solid inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[42.073px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[21px] not-italic text-[#1a1a1a] text-[14px] text-center top-[0.33px]">Kenya</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.979px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[11.5px] not-italic text-[#6c757d] text-[12px] text-center top-[0.67px]">KES</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[42.073px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[76.073px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <FlagIcon />
        <Container2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6C757D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[61.333px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16.667px] py-[0.667px] relative size-full">
          <Container3 />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function CurrencySelector() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[85.333px] items-start left-[770px] top-0 w-[180px]" data-name="CurrencySelector">
      <Container1 />
      <Button />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[93.333px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <CurrencySelector />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[325.125px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0">{`Commission & Subscription Rates`}</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_29_1737)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_29_1737">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#0b2515] relative rounded-[22369600px] shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41.5px] not-italic text-[#0b2515] text-[14px] text-center top-[0.33px]">View Details</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container5 />
        <Text2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Button1 />
    </div>
  );
}

function Container7() {
  return <div className="bg-gradient-to-r from-[#00bc7d] h-[4px] shrink-0 to-[#096] w-full" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d="M12.5 0.833333L0.833333 12.5" id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_62.5%_62.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 5.83333">
            <path d={svgPaths.p1a8ef480} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_16.67%_16.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 5.83333">
            <path d={svgPaths.p1a8ef480} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[45.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(236, 253, 245) 0%, rgb(208, 250, 229) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#a4f4cf] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ecfdf5] h-[25.333px] relative rounded-[22369600px] shrink-0 w-[97.208px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#a4f4cf] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12.67px] not-italic text-[#007a55] text-[12px] top-[5.33px]">Commission</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[45.333px] items-center justify-between left-[20px] top-[20px] w-[262px]" data-name="Container">
      <Container8 />
      <Text3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[20px] left-[20px] top-[81.33px] w-[262px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px] tracking-[0.35px] uppercase">Commission to IDEs</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[105.33px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">Charged to Independent Digital Entrepreneurs</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[39px] left-[20px] overflow-clip top-[136.83px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] w-[220px]">This commission rate is applied to all transactions made by IDEs through the platform.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-0">15%</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Applied per MSME subscription</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[20px] top-[191.83px] w-[262px]" data-name="Container">
      <Container10 />
      <Paragraph3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-r from-[#096] h-[40px] left-[20px] rounded-[12px] to-[#007a55] top-[263.83px] w-[262px]" data-name="Button">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[131.59px] not-italic text-[14px] text-center text-white top-[10.33px]">Set Value</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[323.833px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Heading3 />
      <Paragraph1 />
      <Paragraph2 />
      <Container11 />
      <Button2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[329.167px] left-0 rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <Container7 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container14() {
  return <div className="bg-gradient-to-r from-[#62748e] h-[4px] shrink-0 to-[#45556c] w-full" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_37.5%_12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p3ed09a00} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.32%_54.15%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3371 9.16985">
            <path d={svgPaths.p14e61880} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.63%_16.67%_12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-9.95%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.0417">
            <path d={svgPaths.pea3af60} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[45.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f8fafc] h-[25.333px] relative rounded-[22369600px] shrink-0 w-[72.958px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12.67px] not-italic text-[#314158] text-[12px] top-[5.33px]">Monthly</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[45.333px] items-center justify-between left-[20px] top-[20px] w-[262px]" data-name="Container">
      <Container15 />
      <Text4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[20px] left-[20px] top-[81.33px] w-[262px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px] tracking-[0.35px] uppercase">MSME Subscription</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[105.33px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">Monthly rate per MSME</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[39px] left-[20px] overflow-clip top-[136.83px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] w-[250px]">{`Standard subscription fee for Micro, Small & Medium Enterprises using the platform.`}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-0">$49.99</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Billed monthly per account</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[20px] top-[191.83px] w-[262px]" data-name="Container">
      <Container17 />
      <Paragraph6 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-gradient-to-r from-[#45556c] h-[40px] left-[20px] rounded-[12px] to-[#314158] top-[263.83px] w-[262px]" data-name="Button">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[131.59px] not-italic text-[14px] text-center text-white top-[10.33px]">Set Value</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[323.833px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading4 />
      <Paragraph4 />
      <Paragraph5 />
      <Container18 />
      <Button3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[329.167px] left-[323.33px] rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <Container14 />
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container21() {
  return <div className="bg-gradient-to-r from-[#fe9a00] h-[4px] shrink-0 to-[#e17100] w-full" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3333">
            <path d={svgPaths.p35dc2a00} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 1.66667">
            <path d="M0.833333 0.833333H7.5" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[66.67%] right-[33.33%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 5">
            <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_33.29%_58.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-1/2 right-[49.96%] top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.62%_58.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[49.96%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[66.62%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[45.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 251, 235) 0%, rgb(254, 243, 198) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#fee685] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#fffbeb] h-[25.333px] relative rounded-[22369600px] shrink-0 w-[72.958px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#fee685] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12.67px] not-italic text-[#bb4d00] text-[12px] top-[5.33px]">Monthly</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[45.333px] items-center justify-between left-[20px] top-[20px] w-[262px]" data-name="Container">
      <Container22 />
      <Text5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[20px] left-[20px] top-[81.33px] w-[262px]" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px] tracking-[0.35px] uppercase">Company Subscription</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[105.33px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">Monthly rate per Company</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[39px] left-[20px] overflow-clip top-[136.83px] w-[262px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] w-[207px]">Premium subscription plan for larger companies and enterprise-level organizations.</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-0">$199.99</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Billed monthly per account</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-start left-[20px] top-[191.83px] w-[262px]" data-name="Container">
      <Container24 />
      <Paragraph9 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-gradient-to-r from-[#e17100] h-[40px] left-[20px] rounded-[12px] to-[#bb4d00] top-[263.83px] w-[262px]" data-name="Button">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[131.59px] not-italic text-[14px] text-center text-white top-[10.33px]">Set Value</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[323.833px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Heading5 />
      <Paragraph7 />
      <Paragraph8 />
      <Container25 />
      <Button4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] h-[329.167px] left-[646.67px] rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.667px] relative rounded-[inherit] size-full">
        <Container21 />
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[329.167px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container20 />
      <Container27 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_29_1692)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_29_1692">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#0b2515] content-stretch flex items-center justify-center left-0 rounded-[12px] size-[32px] top-[2px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-[2.67px] w-[140.344px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[22.75px] not-italic relative shrink-0 text-[#101828] text-[14px]">Commission to IDEs:</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[146.34px] top-[2.67px] w-[568.625px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#364153] text-[14px]">Percentage charged to Independent Digital Entrepreneurs on their subscribed MSMES</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-[2.67px] w-[133.813px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[22.75px] not-italic relative shrink-0 text-[#101828] text-[14px]">Subscription Rates:</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[139.81px] top-[2.67px] w-[454.427px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#364153] text-[14px]">Monthly fees charged to MSMEs and Companies for platform access</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[57.5px] items-start left-[44px] top-0 w-[853.333px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[57.5px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[106.833px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(173.584deg, rgb(243, 244, 246) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#0b2515] border-b-[0.667px] border-l-4 border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pl-[28px] pr-[24.667px] pt-[24.667px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0">Platform Overview</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 22">
            <path d={svgPaths.p13e82a40} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
            <path d="M1 1H21" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total Countries</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">15</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Countries with operations</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[121.333px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container35 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99644 9.74449">
            <path d={svgPaths.p2d238840} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e9d4ff] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total Facilitators</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">42</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Active facilitators</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[121.333px] items-start left-[323.33px] pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container39 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_33.33%_16.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20">
            <path d={svgPaths.p37f02100} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
            <path d={svgPaths.pc26e480} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 242, 255) 0%, rgb(224, 231, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total IDEs</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">8</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Independent Digital Entrepreneurs</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[121.333px] items-start left-[646.67px] pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-0 w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container43 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[41.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_41.67%_66.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_41.67%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
            <path d={svgPaths.p38ff0e00} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
            <path d={svgPaths.p398fca00} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p1fa5f300} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(236, 254, 255) 0%, rgb(206, 250, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#a2f4fd] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total Companies</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">156</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Registered companies</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph21 />
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[137.333px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-[141.33px] w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container47 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p9b5a840} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.14%_12.93%_74.86%_12.93%]" data-name="Vector">
        <div className="absolute inset-[-1px_-5.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.794 2">
            <path d="M1 1H18.794" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p395ca780} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(240, 253, 244) 0%, rgb(220, 252, 231) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total MSMEs</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">289</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] w-[130px]">{`Micro, Small & Medium Enterprises`}</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[96px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[137.333px] items-start left-[323.33px] pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-[141.33px] w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container51 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[49.333px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px] tracking-[0.3px] uppercase">Total MDEs</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.67px]">12</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Managed Digital Entrepreneurs</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[137.333px] items-start left-[646.67px] pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[16px] top-[141.33px] w-[303.333px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[278.667px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container40 />
      <Container44 />
      <Container48 />
      <Container52 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[330.667px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container57 />
    </div>
  );
}

function CommissionRates() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[866.667px] items-start relative shrink-0 w-full" data-name="CommissionRates">
      <Container6 />
      <Container28 />
      <Container32 />
      <Container58 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[189.344px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px]">Your Activity at a Glance</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[16px] left-[10.67px] top-[4.67px] w-[64.479px]" data-name="Text">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.5px] not-italic text-[#364153] text-[12px] text-center top-[0.67px]">This Month</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[81.15px] size-[12px] top-[6.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f9fafb] h-[25.333px] relative rounded-[12px] shrink-0 w-[103.813px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <Icon12 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Button5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[166.6px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[16px] left-[190.6px] top-[8px] w-[72.458px]" data-name="Text">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[36.5px] not-italic text-[12px] text-center text-white top-[0.67px]">All Analytics</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-gradient-to-b from-[#0b2515] h-[32px] relative rounded-[16px] shrink-0 to-[#0e3119] w-full" data-name="Button">
      <Icon13 />
      <Text11 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 4.66667">
            <path d={svgPaths.p2d56ab00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.91459 5.68428">
            <path d={svgPaths.p1bd13108} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.91681 4.59097">
            <path d={svgPaths.p28d55600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 5.83333">
            <path d={svgPaths.p24f65af0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#45556c] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[26px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[70.542px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#314158] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Total Users</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[6px] h-[26px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Text12 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0">1,247</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p11c48180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pd14a8f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.458px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[-0.33px]">+12.5%</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Text13 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph30 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[104.333px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(166.351deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 50%, rgb(241, 245, 249) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Container61 />
        <Container63 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 8.16667">
            <path d={svgPaths.p2fab6a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 3.5">
            <path d={svgPaths.p46f5a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/4 right-[24.96%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.58px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.1725 1.16667">
            <path d={svgPaths.p13a8340} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#096] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[26px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[85.01px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#007a55] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Total Revenue</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[6px] h-[26px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Text14 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0">$85.2K</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p11c48180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pd14a8f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.271px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[-0.33px]">+8.3%</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon17 />
      <Text15 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph31 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[104.333px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(166.351deg, rgb(236, 253, 245) 0%, rgb(236, 253, 245) 50%, rgb(208, 250, 229) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(164,244,207,0.8)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Container66 />
        <Container68 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p1eb9a700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 3.5">
            <path d={svgPaths.p46f5a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[#e17100] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[26px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] px-[6px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15px] relative shrink-0 w-[98.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#bb4d00] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Conversion Rate</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[6px] h-[26px] items-center relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Text16 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0">68.4%</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p11c48180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.pd14a8f0} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[29.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[-0.33px]">+2.1%</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[4px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Text17 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph32 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[104.333px] relative rounded-[16px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(166.351deg, rgb(255, 251, 235) 0%, rgb(255, 251, 235) 50%, rgb(254, 243, 198) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(254,230,133,0.8)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.667px] pt-[12.667px] px-[12.667px] relative size-full">
        <Container71 />
        <Container73 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[337px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container69 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container59 />
        <Button6 />
        <Container75 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.594px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px]">Outstanding Payments</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[16px] left-[10.67px] top-[4.67px] w-[71.5px]" data-name="Text">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[36px] not-italic text-[#364153] text-[12px] text-center top-[0.67px]">This Quarter</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[88.17px] size-[12px] top-[6.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f9fafb] h-[25.333px] relative rounded-[12px] shrink-0 w-[110.833px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text18 />
        <Icon20 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading8 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#4a5565] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Total Outstanding</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.67px]">UGX 70,500</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76.333px] items-start left-0 pb-[0.667px] pt-[12.667px] px-[12.667px] rounded-[16px] top-0 w-[208.833px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.921deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#e7000b] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Overdue</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#e7000b] text-[24px] top-[-0.67px]">UGX 22,000</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76.333px] items-start left-[220.83px] pb-[0.667px] pt-[12.667px] px-[12.667px] rounded-[16px] top-0 w-[208.833px]" data-name="Container" style={{ backgroundImage: "linear-gradient(159.921deg, rgb(254, 242, 242) 0%, rgb(255, 226, 226) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Paragraph35 />
      <Paragraph36 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[76.333px] relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.67px]">Payment Health</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[83.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[0.67px]">60% On Track</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text19 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[22369600px] shrink-0 to-[#00a63e] w-full" data-name="Container" />;
}

function Container83() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[171.875px] relative size-full">
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container83 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#e7000b] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Overdue</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#c10007] text-[18px] top-[-0.33px]">2</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#e7000b] text-[9px] top-[0.33px]">invoices</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col gap-[2px] h-[75.833px] items-start left-0 pb-[0.667px] pt-[8.667px] px-[8.667px] rounded-[12px] top-0 w-[137.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph37 />
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#f54900] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">Due Soon</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#ca3500] text-[18px] top-[-0.33px]">2</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#f54900] text-[9px] top-[0.33px]">invoices</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex flex-col gap-[2px] h-[75.833px] items-start left-[145.89px] pb-[0.667px] pt-[8.667px] px-[8.667px] rounded-[12px] top-0 w-[137.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph40 />
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[-0.33px] tracking-[0.25px] uppercase">On Track</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#008236] text-[18px] top-[-0.33px]">1</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#00a63e] text-[9px] top-[0.33px]">invoice</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col gap-[2px] h-[75.833px] items-start left-[291.77px] pb-[0.667px] pt-[8.667px] px-[8.667px] rounded-[12px] top-0 w-[137.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph43 />
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[75.833px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.875px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-[0.67px]">Recent Invoices</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[49.698px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-[25.5px] not-italic text-[#0b2515] text-[10px] text-center top-[-0.33px]">View All →</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Button8 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-[0.67px]">Green Valley Co.</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] top-[-0.33px]">#INV-001</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="flex-[1_0_0] h-[31px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph46 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.99px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[70px] not-italic text-[#101828] text-[12px] text-right top-[0.67px]">UGX 12,000</p>
      </div>
    </div>
  );
}

function Container91() {
  return <div className="bg-[#fb2c36] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text21() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#e7000b] text-[10px] top-[-0.33px]">Overdue</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[15px] relative shrink-0 w-[50.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container91 />
        <Text21 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#f9fafb] h-[47px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Container90 />
          <Paragraph48 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-[0.67px]">Fresh Farms Ltd.</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] top-[-0.33px]">#INV-002</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[1_0_0] h-[31px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph49 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64.458px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[65px] not-italic text-[#101828] text-[12px] text-right top-[0.67px]">UGX 8,500</p>
      </div>
    </div>
  );
}

function Container95() {
  return <div className="bg-[#ff6900] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#f54900] text-[10px] top-[-0.33px]">Due Soon</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[15px] relative shrink-0 w-[56.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container95 />
        <Text22 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#f9fafb] h-[47px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Container94 />
          <Paragraph51 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-[0.67px]">Verido Foods</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6a7282] text-[10px] top-[-0.33px]">#INV-003</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[1_0_0] h-[31px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph52 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[16px] relative shrink-0 w-[69.615px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[70px] not-italic text-[#101828] text-[12px] text-right top-[0.67px]">UGX 15,000</p>
      </div>
    </div>
  );
}

function Container99() {
  return <div className="bg-[#00c950] rounded-[22369600px] shrink-0 size-[6px]" data-name="Container" />;
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#00a63e] text-[10px] top-[-0.33px]">On Track</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.177px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container99 />
        <Text23 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#f9fafb] h-[47px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Container98 />
          <Paragraph54 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[157px] items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container97 />
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[181px] items-start relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container102 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.5px] left-[96.28px] not-italic text-[#155dfc] text-[9px] text-center top-[0.33px] tracking-[0.225px] uppercase">Avg. Payment Time</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[95.68px] not-italic text-[#1447e6] text-[18px] text-center top-[-0.33px]">18 days</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col gap-[4px] h-[62.833px] items-start left-0 pb-[0.667px] pt-[8.667px] px-[8.667px] rounded-[12px] top-[12.67px] w-[208.833px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.5px] left-[96.19px] not-italic text-[#e7000b] text-[9px] text-center top-[0.33px] tracking-[0.225px] uppercase">Oldest Overdue</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[95.66px] not-italic text-[#c10007] text-[18px] text-center top-[-0.33px]">42 days</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute bg-[#fef2f2] content-stretch flex flex-col gap-[4px] h-[62.833px] items-start left-[220.83px] pb-[0.667px] pt-[8.667px] px-[8.667px] rounded-[12px] top-[12.67px] w-[208.833px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[75.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-gradient-to-b from-[#0b2515] h-[36px] relative rounded-[12px] shrink-0 to-[#0e3119] w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[215.01px] not-italic text-[12px] text-center text-white top-[10.67px]">Send Payment Reminders</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] col-[2] css-por8k5 relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container77 />
        <Container80 />
        <Container84 />
        <Container88 />
        <Container103 />
        <Container106 />
        <Button9 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[630px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container107 />
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1520.667px] items-start relative shrink-0 w-full" data-name="DashboardOverview">
      <CommissionRates />
      <Container108 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0B2515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #0B2515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[62.5px] not-italic text-[#0b2515] text-[16px] text-center top-[-1px]">Add Component</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[48px] items-center left-[745.47px] px-[26px] py-[2px] rounded-[16px] top-0 w-[204.531px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#0b2515] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Icon21 />
      <Text24 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_29_1633)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_29_1633">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.198px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">Countries</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-white h-[40px] relative rounded-[22369600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[160.198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[20px] relative size-full">
        <Icon22 />
        <Text25 />
        <Container109 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35b3faa0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px]">Facilitators</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[41.333px] relative rounded-[22369600px] shrink-0 w-[170.115px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[20.667px] pr-[0.667px] py-[0.667px] relative size-full">
        <Icon24 />
        <Text26 />
        <Container111 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 8H9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 5.33333H9.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35fdc80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p91828dc} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2af3f500} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px]">Company Performance</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[41.333px] relative rounded-[22369600px] shrink-0 w-[251.781px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20.667px] py-[0.667px] relative size-full">
        <Icon26 />
        <Text27 />
        <Container113 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_29_1606)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_29_1606">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px]">Digital Entrepreneurs</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[41.333px] relative rounded-[22369600px] shrink-0 w-[238.219px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20.667px] py-[0.667px] relative size-full">
        <Icon28 />
        <Text28 />
        <Container115 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[12px] h-[49.333px] items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Container112 />
      <Container114 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0b2515] h-[82.667px] left-0 rounded-[16px] to-[#0b2515] top-[64px] via-1/2 via-[#0e3119] w-[950px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[0.667px] pt-[16.667px] px-[24.667px] relative rounded-[inherit] size-full">
        <Container117 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(54,65,83,0.3)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[146.667px] relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Container118 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.67px]">Countries</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Track performance and sales across all operational regions</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[56px] relative shrink-0 w-[391.052px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph59 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-0 top-[1.33px] w-[76.146px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]">5 countries</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.677px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text29 />
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[76.15px] not-italic text-[#4a5565] text-[14px] top-[0.33px]">active</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[16.67px] size-[16px] top-[10.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f9fafb] h-[37.333px] relative rounded-[16px] shrink-0 w-[134.073px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon30 />
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.67px] not-italic text-[#364153] text-[14px] text-center top-[9px]">Export CSV</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[265.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text30 />
        <Button11 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[121.333px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative size-full">
        <Container122 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex items-center justify-center left-[24px] rounded-[16px] size-[48px] top-[24px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Total Sales</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[64px] left-[24px] top-[112px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.67px] w-[120px]">UGX 7,885,000</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[180px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Across all countries</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0.667px] border-solid h-[221.333px] left-0 rounded-[16px] top-0 w-[164.125px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.558deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
      <Container124 />
      <Paragraph60 />
      <Paragraph61 />
      <Paragraph62 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M10 12H14" id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 8H14" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8dd9500} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3603ff00} id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p26acdf00} id="Vector_5" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute bg-[#bedbff] content-stretch flex items-center justify-center left-[24px] rounded-[16px] size-[48px] top-[24px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.33px]">Total Companies</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[112px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#1c398e] text-[24px] top-[-0.67px]">318</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[148px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-[0.67px] w-[64px]">Registered businesses</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute border-[#bedbff] border-[0.667px] border-solid h-[221.333px] left-[180.13px] rounded-[16px] top-0 w-[164.135px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.56deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <Container126 />
      <Paragraph63 />
      <Paragraph64 />
      <Paragraph65 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #CA3500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #CA3500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #CA3500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #CA3500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-[#ffd6a8] content-stretch flex items-center justify-center left-[24px] rounded-[16px] size-[48px] top-[24px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#ca3500] text-[14px] top-[0.33px]">Total MSMEs</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[112px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#7e2a0c] text-[24px] top-[-0.67px]">8,050</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[148px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#f54900] text-[12px] top-[0.67px] w-[114px]">{`Micro, Small & Medium Enterprises`}</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute border-[#ffd6a7] border-[0.667px] border-solid h-[221.333px] left-[360.26px] rounded-[16px] top-0 w-[164.135px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.56deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }}>
      <Container128 />
      <Paragraph66 />
      <Paragraph67 />
      <Paragraph68 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-[#e9d4ff] content-stretch flex items-center justify-center left-[24px] rounded-[16px] size-[48px] top-[24px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#8200db] text-[14px] top-[0.33px]">Total IDEs</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[112px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#59168b] text-[24px] top-[-0.67px]">18,400</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[148px] w-[114.802px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-[0.67px] w-[111px]">Independent Digital Entrepreneurs</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute border-[#e9d4ff] border-[0.667px] border-solid h-[221.333px] left-[540.4px] rounded-[16px] top-0 w-[164.135px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.56deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }}>
      <Container130 />
      <Paragraph69 />
      <Paragraph70 />
      <Paragraph71 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, #C6005C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, #C6005C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute bg-[#fccee8] content-stretch flex items-center justify-center left-[24px] rounded-[16px] size-[48px] top-[24px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#c6005c] text-[14px] top-[0.33px]">Total MDEs</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[112px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#861043] text-[24px] top-[-0.67px]">4,550</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[148px] w-[114.792px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#e60076] text-[12px] top-[0.67px] w-[92px]">Managed Digital Entrepreneurs</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute border-[#fccee8] border-[0.667px] border-solid h-[221.333px] left-[720.53px] rounded-[16px] top-0 w-[164.125px]" data-name="Container" style={{ backgroundImage: "linear-gradient(126.558deg, rgb(253, 242, 248) 0%, rgb(252, 231, 243) 100%)" }}>
      <Container132 />
      <Paragraph72 />
      <Paragraph73 />
      <Paragraph74 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[221.333px] relative shrink-0 w-full" data-name="Container">
      <Container125 />
      <Container127 />
      <Container129 />
      <Container131 />
      <Container133 />
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[286.667px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative size-full">
        <Container134 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-[223.823px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.67px]">Transaction Trends</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="bg-[#fef3c6] h-[25.333px] relative rounded-[22369600px] shrink-0 w-[88.979px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#fee685] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12.67px] not-italic text-[#bb4d00] text-[12px] top-[5.33px]">Demo Data</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Text31 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Transaction breakdown by business type</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[60px] relative shrink-0 w-[324.802px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container136 />
        <Paragraph75 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p82fb540} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12.6667V3.33333" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.771px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] top-[0.33px]">+39.5%</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[104.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-[0.67px]">vs previous period</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-[#f0fdf4] flex-[1_0_0] h-[33.333px] min-h-px min-w-px relative rounded-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pl-[12.667px] pr-[0.667px] py-[0.667px] relative size-full">
          <Icon36 />
          <Text32 />
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[16.67px] size-[16px] top-[10.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#f9fafb] h-[37.333px] relative rounded-[16px] shrink-0 w-[118.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon37 />
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[71.67px] not-italic text-[#364153] text-[14px] text-center top-[9px]">Last year</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[346.823px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container138 />
        <Button12 />
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container139 />
    </div>
  );
}

function Container141() {
  return <div className="bg-[#101828] rounded-[22369600px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.33px]">Company Transactions</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container141 />
        <Text34 />
      </div>
    </div>
  );
}

function Container143() {
  return <div className="bg-[#00bba7] rounded-[22369600px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text35() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.33px]">MSME Transactions</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[20px] relative shrink-0 w-[153.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container143 />
        <Text35 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[2px] relative shrink-0 w-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-solid border-t-2 inset-0 pointer-events-none" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.896px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.33px]">Total Transactions</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[20px] relative shrink-0 w-[162.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container145 />
        <Text36 />
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Container144 />
      <Container146 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.25%_3.39%_8.75%_9.04%]" data-name="Group">
      <div className="absolute inset-[-0.14%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775 361">
          <g id="Group">
            <path d="M0 360.5H775" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M0 273.403H775" id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M0 186.306H775" id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M0 99.2097H775" id="Vector_4" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M0 12.1129H775" id="Vector_5" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M0 0.5H775" id="Vector_6" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.25%_3.39%_8.75%_9.04%]" data-name="Group">
      <div className="absolute inset-[0_-0.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 776 360">
          <g id="Group">
            <path d="M0.5 0V360" id="Vector" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M70.9545 0V360" id="Vector_2" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M141.409 0V360" id="Vector_3" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M211.864 0V360" id="Vector_4" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M282.318 0V360" id="Vector_5" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M352.773 0V360" id="Vector_6" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M423.227 0V360" id="Vector_7" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M493.682 0V360" id="Vector_8" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M564.136 0V360" id="Vector_9" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M634.591 0V360" id="Vector_10" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M705.045 0V360" id="Vector_11" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
            <path d="M775.5 0V360" id="Vector_12" stroke="var(--stroke-0, #E5E7EB)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.25%_3.39%_8.75%_9.04%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function RechartsZindex100R() {
  return (
    <div className="absolute contents inset-[1.25%_3.39%_8.75%_9.04%]" data-name="recharts-zindex--100-:r2:">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[1.25%_3.39%_61.01%_9.04%]" data-name="Group">
      <div className="absolute inset-[-0.81%_-0.04%_-0.78%_-0.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775.711 153.359">
          <g id="Group">
            <path d={svgPaths.p1443be80} id="recharts-line-:r4:" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5 5 5 5 5 5 5" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[28.83%_3.39%_43.59%_9.04%]" data-name="Group">
      <div className="absolute inset-[-1.12%_-0.02%_-1.09%_-0.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775.502 112.767">
          <g id="Group">
            <path d={svgPaths.p1107a000} id="recharts-line-:r5:" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[68.02%_3.39%_21.81%_9.04%]" data-name="Group">
      <div className="absolute inset-[-3.07%_-0.01%_-3.03%_-0.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775.306 43.1233">
          <g id="Group">
            <path d={svgPaths.p2928bf00} id="recharts-line-:r6:" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex400Ra() {
  return (
    <div className="absolute contents inset-[1.25%_3.39%_21.81%_9.04%]" data-name="recharts-zindex-400-:ra:">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[91.25%_90.96%_7.25%_9.04%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[91.25%_83%_7.25%_17%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[91.25%_75.04%_7.25%_24.96%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[91.25%_67.08%_7.25%_32.92%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[91.25%_59.12%_7.25%_40.88%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[91.25%_51.16%_7.25%_48.84%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[91.25%_43.19%_7.25%_56.81%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[91.25%_35.23%_7.25%_64.77%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[91.25%_27.27%_7.25%_72.73%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[91.25%_19.31%_7.25%_80.69%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[91.25%_11.35%_7.25%_88.65%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[91.25%_3.39%_7.25%_96.61%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[91.25%_3.39%_7.25%_9.04%]" data-name="Group">
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[91.25%_3.39%_7.25%_9.04%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[91.25%_3.39%_7.25%_9.04%]" data-name="Group">
      <div className="absolute inset-[91.25%_3.39%_8.75%_9.04%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 775 1">
            <path d="M0 0.5H775" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </svg>
        </div>
      </div>
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[91.25%_90.96%_8.75%_8.36%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[69.48%_90.96%_30.52%_8.36%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[47.7%_90.96%_52.3%_8.36%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[25.93%_90.96%_74.07%_8.36%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[4.15%_90.96%_95.85%_8.36%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[4.15%_90.96%_8.75%_8.36%]" data-name="Group">
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[4.15%_90.96%_8.75%_8.36%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[1.25%_90.96%_8.75%_8.36%]" data-name="Group">
      <div className="absolute inset-[1.25%_90.96%_8.75%_9.04%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 360">
            <path d="M0.5 0V360" id="Vector" stroke="var(--stroke-0, #6B7280)" />
          </svg>
        </div>
      </div>
      <Group27 />
    </div>
  );
}

function RechartsZindex500Rb() {
  return (
    <div className="absolute contents inset-[1.25%_3.39%_7.25%_8.36%]" data-name="recharts-zindex-500-:rb:">
      <Group20 />
      <Group28 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[0.25%_2.94%_60.01%_8.59%]" data-name="Group">
      <div className="absolute inset-[-0.79%_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 785.5 161.468">
          <g id="Group">
            <path d={svgPaths.p2f25f100} fill="var(--fill-0, #3B82F6)" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p2b6f7880} fill="var(--fill-0, #3B82F6)" id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p3df3bd00} fill="var(--fill-0, #3B82F6)" id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p381ee700} fill="var(--fill-0, #3B82F6)" id="Vector_4" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p14ac1d80} fill="var(--fill-0, #3B82F6)" id="Vector_5" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p2248680} fill="var(--fill-0, #3B82F6)" id="Vector_6" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p34eefb00} fill="var(--fill-0, #3B82F6)" id="Vector_7" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p34cd5980} fill="var(--fill-0, #3B82F6)" id="Vector_8" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p3cba29b0} fill="var(--fill-0, #3B82F6)" id="Vector_9" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p1a459300} fill="var(--fill-0, #3B82F6)" id="Vector_10" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p161cd200} fill="var(--fill-0, #3B82F6)" id="Vector_11" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
            <path d={svgPaths.p3ebb30f0} fill="var(--fill-0, #3B82F6)" id="Vector_12" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="5 5" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[27.83%_2.94%_42.59%_8.59%]" data-name="Group">
      <div className="absolute inset-[-1.06%_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 785.5 120.823">
          <g id="Group">
            <path d={svgPaths.pa456300} fill="var(--fill-0, #14B8A6)" id="Vector" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p9cbcc80} fill="var(--fill-0, #14B8A6)" id="Vector_2" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p33682980} fill="var(--fill-0, #14B8A6)" id="Vector_3" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p1843f100} fill="var(--fill-0, #14B8A6)" id="Vector_4" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p18034e70} fill="var(--fill-0, #14B8A6)" id="Vector_5" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p33735300} fill="var(--fill-0, #14B8A6)" id="Vector_6" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.pb824500} fill="var(--fill-0, #14B8A6)" id="Vector_7" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p36454500} fill="var(--fill-0, #14B8A6)" id="Vector_8" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p34a32b80} fill="var(--fill-0, #14B8A6)" id="Vector_9" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.pb420f80} fill="var(--fill-0, #14B8A6)" id="Vector_10" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p19754500} fill="var(--fill-0, #14B8A6)" id="Vector_11" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
            <path d={svgPaths.p3ebb30f0} fill="var(--fill-0, #14B8A6)" id="Vector_12" stroke="var(--stroke-0, #14B8A6)" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[67.02%_2.94%_20.81%_8.59%]" data-name="Group">
      <div className="absolute inset-[-2.57%_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 785.5 51.1452">
          <g id="Group">
            <path d={svgPaths.p35ff8f80} fill="var(--fill-0, #1F2937)" id="Vector" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p26737500} fill="var(--fill-0, #1F2937)" id="Vector_2" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p5473c80} fill="var(--fill-0, #1F2937)" id="Vector_3" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p25066c0} fill="var(--fill-0, #1F2937)" id="Vector_4" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p23e3d500} fill="var(--fill-0, #1F2937)" id="Vector_5" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p2fc01500} fill="var(--fill-0, #1F2937)" id="Vector_6" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p1563fa00} fill="var(--fill-0, #1F2937)" id="Vector_7" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.pe49fd80} fill="var(--fill-0, #1F2937)" id="Vector_8" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p231e5980} fill="var(--fill-0, #1F2937)" id="Vector_9" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p19047880} fill="var(--fill-0, #1F2937)" id="Vector_10" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p2c945680} fill="var(--fill-0, #1F2937)" id="Vector_11" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
            <path d={svgPaths.p3ebb30f0} fill="var(--fill-0, #1F2937)" id="Vector_12" stroke="var(--stroke-0, #1F2937)" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RechartsZindex600Rc() {
  return (
    <div className="absolute contents inset-[0.25%_2.94%_20.81%_8.59%]" data-name="recharts-zindex-600-:rc:">
      <Group29 />
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[92.38%_89.6%_3.87%_7.68%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_89.6%_3.87%_7.68%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">JAN</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[92.38%_81.7%_3.87%_15.7%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_81.7%_3.87%_15.7%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">FEB</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[92.38%_73.51%_3.87%_23.44%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_73.51%_3.87%_23.44%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">MAR</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[92.38%_65.72%_3.87%_31.57%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_65.72%_3.87%_31.57%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">APR</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[92.38%_57.65%_3.87%_39.41%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_57.65%_3.87%_39.41%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">MAY</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[92.38%_49.74%_3.87%_47.43%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_49.74%_3.87%_47.43%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">JUN</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[92.38%_41.9%_3.87%_55.51%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_41.9%_3.87%_55.51%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">JUL</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[92.38%_33.76%_3.87%_63.3%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_33.76%_3.87%_63.3%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">AUG</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[92.38%_25.97%_3.87%_71.43%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_25.97%_3.87%_71.43%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">SEP</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[92.38%_17.84%_3.87%_79.22%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_17.84%_3.87%_79.22%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">OCT</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[92.38%_9.88%_3.87%_87.18%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_9.88%_3.87%_87.18%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">NOV</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[92.38%_1.98%_3.87%_95.2%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[92.38%_1.98%_3.87%_95.2%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-center">DEC</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[92.38%_1.98%_3.87%_7.68%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[89.32%_91.86%_6.93%_5.65%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[89.32%_91.86%_6.93%_5.65%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-right">$0k</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[67.54%_91.86%_28.71%_4.86%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[67.54%_91.86%_28.71%_4.86%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-right">$75k</p>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[45.77%_91.86%_50.48%_4.18%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[45.77%_91.86%_50.48%_4.18%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-right">$150k</p>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[23.99%_91.86%_72.26%_3.95%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[23.99%_91.86%_72.26%_3.95%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-right">$225k</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[2.22%_91.86%_94.03%_3.95%]" data-name="Group">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[2.22%_91.86%_94.03%_3.95%] leading-[normal] not-italic text-[#6b7280] text-[12px] text-right">$300k</p>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[2.22%_91.86%_6.93%_3.95%]" data-name="Group">
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
    </div>
  );
}

function RechartsZindex2000Rg() {
  return (
    <div className="absolute contents inset-[2.22%_1.98%_3.87%_3.95%]" data-name="recharts-zindex-2000-:rg:">
      <Group44 />
      <Group50 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute h-[400px] left-0 overflow-clip top-0 w-[885px]" data-name="Icon">
      <RechartsZindex100R />
      <RechartsZindex400Ra />
      <RechartsZindex500Rb />
      <RechartsZindex600Rc />
      <RechartsZindex2000Rg />
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[601.333px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative size-full">
        <Container140 />
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-0.67px]">Countries Details</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.33px] w-[75px]">5 countries</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[56px] relative shrink-0 w-[199.177px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading11 />
        <Paragraph76 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-[16.67px] size-[16px] top-[10.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[37.333px] relative rounded-[12px] shrink-0 w-[134.073px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon39 />
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.67px] not-italic text-[#364153] text-[14px] text-center top-[9px]">Export CSV</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container150 />
      <Button13 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[45.333px] left-0 rounded-[16px] top-0 w-[884.667px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)]">Search by country name or code...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[12.67px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pb5da900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[45.333px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon40 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[162.5px]" data-name="Header Cell">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[12px] not-italic text-[#101828] text-[14px] top-[12.33px]">Country</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[45px] left-[162.5px] top-0 w-[139.49px]" data-name="Header Cell">
      <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[127.95px] not-italic text-[#101828] text-[14px] text-right top-[12.33px]">Total Sales</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[45px] left-[301.99px] top-0 w-[126.125px]" data-name="Header Cell">
      <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[114.63px] not-italic text-[#101828] text-[14px] text-right top-[12.33px]">Companies</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[45px] left-[428.11px] top-0 w-[125.917px]" data-name="Header Cell">
      <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[114.31px] not-italic text-[#101828] text-[14px] text-right top-[12.33px]">MSMEs</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[45px] left-[554.03px] top-0 w-[126.479px]" data-name="Header Cell">
      <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[115.08px] not-italic text-[#101828] text-[14px] text-right top-[12.33px]">IDEs</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[45px] left-[680.51px] top-0 w-[125.552px]" data-name="Header Cell">
      <p className="-translate-x-full absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[114.05px] not-italic text-[#101828] text-[14px] text-right top-[12.33px]">MDEs</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[45px] left-[806.06px] top-0 w-[78.604px]" data-name="Header Cell">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[39.7px] not-italic text-[#101828] text-[14px] text-center top-[12.33px]">Details</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#d1d5dc] border-b-2 border-solid h-[45px] left-0 top-0 w-[884.667px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[884.667px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Text37() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">KE</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.417px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">Kenya</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[12px] top-[13px] w-[138.5px]" data-name="Container">
      <Text37 />
      <Text38 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[57.333px] left-0 top-0 w-[162.5px]" data-name="Table Cell">
      <Container153 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[57.333px] left-[162.5px] top-0 w-[139.49px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[128.17px] not-italic text-[#101828] text-[14px] text-right top-[19.33px] w-[103px]">UGX 1,285,000</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[57.333px] left-[301.99px] top-0 w-[126.125px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.74px] not-italic text-[#364153] text-[14px] text-right top-[19.33px] w-[87px]">UGX 515,000</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[57.333px] left-[428.11px] top-0 w-[125.917px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.22px] not-italic text-[#364153] text-[14px] text-right top-[19.33px] w-[90px]">UGX 385,000</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[57.333px] left-[554.03px] top-0 w-[126.479px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.91px] not-italic text-[#364153] text-[14px] text-right top-[19.33px] w-[90px]">UGX 235,000</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[57.333px] left-[680.51px] top-0 w-[125.552px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[113.61px] not-italic text-[#364153] text-[14px] text-right top-[19.33px] w-[87px]">UGX 150,000</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[23.3px] p-[2px] rounded-[12px] size-[32px] top-[13px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon41 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[57.333px] left-[806.06px] top-0 w-[78.604px]" data-name="Table Cell">
      <Container154 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-b-[0.667px] border-solid h-[57.333px] left-0 top-0 w-[884.667px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Text39() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">NG</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.021px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">Nigeria</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[12px] top-[12.33px] w-[138.5px]" data-name="Container">
      <Text39 />
      <Text40 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[162.5px]" data-name="Table Cell">
      <Container155 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[56.667px] left-[162.5px] top-0 w-[139.49px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[128.19px] not-italic text-[#101828] text-[14px] text-right top-[18.67px] w-[102px]">UGX 2,150,000</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[56.667px] left-[301.99px] top-0 w-[126.125px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.84px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 860,000</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[56.667px] left-[428.11px] top-0 w-[125.917px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.8px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 645,000</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[56.667px] left-[554.03px] top-0 w-[126.479px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.76px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[90px]">UGX 395,000</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[56.667px] left-[680.51px] top-0 w-[125.552px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[113.77px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[90px]">UGX 250,000</p>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[23.3px] p-[2px] rounded-[12px] size-[32px] top-[12.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon42 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[56.667px] left-[806.06px] top-0 w-[78.604px]" data-name="Table Cell">
      <Container156 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] border-[#f3f4f6] border-b-[0.667px] border-solid h-[56.667px] left-0 top-[57.33px] w-[884.667px]" data-name="Table Row">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Text41() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">ZA</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.271px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">South Africa</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[12px] top-[12.33px] w-[138.5px]" data-name="Container">
      <Text41 />
      <Text42 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[162.5px]" data-name="Table Cell">
      <Container157 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[56.667px] left-[162.5px] top-0 w-[139.49px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[128.07px] not-italic text-[#101828] text-[14px] text-right top-[18.67px] w-[103px]">UGX 1,850,000</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[56.667px] left-[301.99px] top-0 w-[126.125px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[115.03px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[90px]">UGX 740,000</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[56.667px] left-[428.11px] top-0 w-[125.917px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[113.92px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[89px]">UGX 555,000</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[56.667px] left-[554.03px] top-0 w-[126.479px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.85px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 340,000</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[56.667px] left-[680.51px] top-0 w-[125.552px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[113.93px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[87px]">UGX 215,000</p>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[23.3px] p-[2px] rounded-[12px] size-[32px] top-[12.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon43 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[56.667px] left-[806.06px] top-0 w-[78.604px]" data-name="Table Cell">
      <Container158 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-b-[0.667px] border-solid h-[56.667px] left-0 top-[114px] w-[884.667px]" data-name="Table Row">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Text43() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">GH</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">Ghana</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[12px] top-[12.33px] w-[138.5px]" data-name="Container">
      <Text43 />
      <Text44 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[162.5px]" data-name="Table Cell">
      <Container159 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[56.667px] left-[162.5px] top-0 w-[139.49px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[128.09px] not-italic text-[#101828] text-[14px] text-right top-[18.67px] w-[93px]">UGX 950,000</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[56.667px] left-[301.99px] top-0 w-[126.125px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.88px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 380,000</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[56.667px] left-[428.11px] top-0 w-[125.917px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.32px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[90px]">UGX 285,000</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[56.667px] left-[554.03px] top-0 w-[126.479px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.6px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[86px]">UGX 175,000</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[56.667px] left-[680.51px] top-0 w-[125.552px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.23px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[85px]">UGX 110,000</p>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[23.3px] p-[2px] rounded-[12px] size-[32px] top-[12.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon44 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[56.667px] left-[806.06px] top-0 w-[78.604px]" data-name="Table Cell">
      <Container160 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] border-[#f3f4f6] border-b-[0.667px] border-solid h-[56.667px] left-0 top-[170.67px] w-[884.667px]" data-name="Table Row">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Text45() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[12px] shrink-0 size-[32px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">EG</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.33px]">Egypt</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[12px] top-[12.33px] w-[138.5px]" data-name="Container">
      <Text45 />
      <Text46 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[162.5px]" data-name="Table Cell">
      <Container161 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[56.667px] left-[162.5px] top-0 w-[139.49px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[128.09px] not-italic text-[#101828] text-[14px] text-right top-[18.67px] w-[103px]">UGX 1,650,000</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[56.667px] left-[301.99px] top-0 w-[126.125px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.82px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 660,000</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[56.667px] left-[428.11px] top-0 w-[125.917px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.8px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[91px]">UGX 495,000</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[56.667px] left-[554.03px] top-0 w-[126.479px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.61px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[90px]">UGX 305,000</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[56.667px] left-[680.51px] top-0 w-[125.552px]" data-name="Table Cell">
      <p className="-translate-x-full absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[114.24px] not-italic text-[#364153] text-[14px] text-right top-[18.67px] w-[88px]">UGX 190,000</p>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[23.3px] p-[2px] rounded-[12px] size-[32px] top-[12.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon45 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[56.667px] left-[806.06px] top-0 w-[78.604px]" data-name="Table Cell">
      <Container162 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-b-[0.667px] border-solid h-[56.667px] left-0 top-[227.33px] w-[884.667px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[284px] left-0 top-[45px] w-[884.667px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[329.333px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] h-[544px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(229,231,235,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[0.667px] pt-[32.667px] px-[32.667px] relative size-full">
        <Container151 />
        <Container152 />
        <Table />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1625.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Container123 />
      <Container135 />
      <Container149 />
      <Container163 />
    </div>
  );
}

function UserOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1796px] items-start relative shrink-0 w-full" data-name="UserOverview">
      <Container119 />
      <Container164 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[32px] h-[3674px] items-start left-0 pl-[280px] pr-[40px] pt-[88px] top-0 w-[1270px]" data-name="App">
      <Container4 />
      <DashboardOverview />
      <UserOverview />
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[22.208px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#1a1a1a] text-[12px] top-px">$0k</p>
    </div>
  );
}

function Icon46() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
            <path d={svgPaths.p2ab2d800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[200px] pt-[6px] px-[6px] rounded-[12px] size-[28px] top-[12px]" data-name="Button">
      <Icon46 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[20px] left-[48px] top-[12px] w-[72.208px]" data-name="Text">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[36.5px] not-italic text-[14px] text-center text-white top-[0.33px]">Dashboard</p>
    </div>
  );
}

function Container165() {
  return <div className="absolute bg-white h-[44px] left-0 top-0 w-[4px]" data-name="Container" />;
}

function Button15() {
  return (
    <div className="bg-[#6aa17a] h-[44px] relative shrink-0 w-full" data-name="Button">
      <Icon47 />
      <Text48 />
      <Container165 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18e6a68} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[36.5px] not-italic text-[#d1d5dc] text-[14px] text-center top-[0.33px]">Facilitators</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon48 />
          <Text49 />
        </div>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1d27a00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[149.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[75.5px] not-italic text-[#d1d5dc] text-[14px] text-center top-[0.33px]">Roles and Permissions</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">
          <Icon49 />
          <Text50 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col h-[140px] items-start left-0 pt-[8px] top-[48px] w-[240px]" data-name="Navigation">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2483b8c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[27.5px] not-italic text-[#99a1af] text-[14px] text-center top-[0.33px]">Settings</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[44px] items-center relative shrink-0 w-full" data-name="Button">
      <Icon50 />
      <Text51 />
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[68.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[12.667px] px-[16px] relative size-full">
        <Button18 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[9px] not-italic text-[14px] text-center text-white top-[0.33px]">PP</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.01px] relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px]">Philip Partner</p>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-[0.67px] w-[123px]">partneradmin@gma...</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Paragraph77 />
        <Paragraph78 />
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <Container167 />
          <Container168 />
          <Icon51 />
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[96.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[16.667px] px-[16px] relative size-full">
        <Button19 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute bg-[#0b2515] content-stretch flex flex-col h-[165.333px] items-start left-0 top-[382px] w-[240px]" data-name="Container">
      <Container166 />
      <Container169 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#0b2515] h-[547.333px] left-0 overflow-clip shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[56px] w-[240px]" data-name="Sidebar">
      <Button14 />
      <Navigation />
      <Container170 />
    </div>
  );
}

function ImageVerido() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[12px] w-[84.073px]" data-name="Image (Verido)">
      <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageVerido} />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[36px] left-0 rounded-[12px] top-0 w-[416px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[4px] relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#d1d5dc] text-[14px]">Search by Partner, Product, or Transaction</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon52 />
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[411px] px-[16px] top-[10px] w-[448px]" data-name="Container">
      <Container171 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(11,37,21,0.95)] h-[56px] left-0 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[1270px]" data-name="Header">
      <ImageVerido />
      <Container172 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 15.8333V18.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pb4beb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25182900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[20px] opacity-77 relative shrink-0 w-[61.823px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[31px] not-italic text-[14px] text-center text-white top-[0.33px]">Verido AI</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#0b2515] gap-[12px] h-[52px] items-center left-0 pl-[22px] pr-[2px] py-[2px] rounded-[22369600px] to-[#0e3119] top-0 w-[137.823px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Icon53 />
      <Text53 />
    </div>
  );
}

function Container173() {
  return <div className="absolute bg-gradient-to-b from-[#f0a500] left-[124.81px] opacity-93 rounded-[22369600px] shadow-[0px_0px_12px_0px_rgba(240,165,0,0.8),0px_0px_20px_0px_rgba(240,165,0,0.4)] size-[18.035px] to-[#e67e22] top-[-5.02px]" data-name="Container" />;
}

function AiAssistant() {
  return (
    <div className="absolute h-[52px] left-[1108.18px] top-[527.33px] w-[137.823px]" data-name="AIAssistant">
      <Button20 />
      <Container173 />
    </div>
  );
}

export default function VeridoDashboard() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="Verido Dashboard">
      <App />
      <Text47 />
      <Sidebar />
      <Header />
      <AiAssistant />
    </div>
  );
}