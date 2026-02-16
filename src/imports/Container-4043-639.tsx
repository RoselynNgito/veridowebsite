function Paragraph() {
  return (
    <div className="absolute h-[42px] left-0 top-[18px] w-[697.698px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[42px] left-[348.93px] not-italic text-[#162f21] text-[28px] text-center top-0 tracking-[4.2px] uppercase">The Real Issue</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[697.698px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#162f21] h-[2px] left-[296.84px] top-0 w-[64px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-[#d4a574] h-[2px] left-[368.84px] top-0 w-[32px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute h-[2px] left-0 top-[9.63px] w-[697.698px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[26px] left-[48px] top-[20px] w-[540.333px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-0.32px)] not-italic text-[20px] text-center text-white top-[-0.33px]">
        <span className="leading-[26px]">{`Without it, support and finance become `}</span>
        <span className="font-['Inter:Bold_Italic',sans-serif] italic leading-[26px] text-[#d4a574]">trial-and-error.</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-b border-[#d4a574] border-l-4 border-solid from-[#162f21] h-[66px] left-[28.68px] rounded-[6px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] to-[#6b5d47] top-[343.4px] via-1/2 via-[#223a28] w-[640.333px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[38.396px] leading-[19.2px] left-0 not-italic text-[#dc2626] text-[16px] top-0 tracking-[3.2px] uppercase w-[284.844px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.67px]">What programmes</p>
      <p className="absolute left-0 top-[18.53px]">often hear</p>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#dc2626] h-[3px] left-0 top-[50.4px] w-[64px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[53.396px] relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Container10 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold_Italic',sans-serif] font-bold italic leading-[26px] left-0 text-[#4b5563] text-[20px] top-[-0.33px]">{`"MSMEs are not bankable."`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col gap-[24px] h-[219.396px] items-start left-0 pt-[32px] px-[32px] top-0 w-[348.844px]" data-name="Container">
      <Container9 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute font-['Inter:Black',sans-serif] font-black h-[38.396px] leading-[19.2px] left-0 not-italic text-[#d4a574] text-[16px] top-0 tracking-[3.2px] uppercase w-[284.854px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.67px]">{`What's`}</p>
      <p className="absolute left-0 top-[18.53px]">actually missing</p>
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#d4a574] h-[3px] left-0 top-[50.4px] w-[64px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="h-[53.396px] relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Container13 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[26px] left-0 not-italic text-[20px] text-white top-[-0.33px] w-[231px] whitespace-pre-wrap">Real-time visibility into partner and beneficiary behaviour.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#162f21] content-stretch flex flex-col gap-[24px] h-[219.396px] items-start left-[348.84px] pt-[32px] px-[32px] top-0 w-[348.854px]" data-name="Container">
      <Container12 />
      <Paragraph5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[219.396px] left-0 top-[92px] w-[697.698px]" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[409.396px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f9fafb] items-start pt-[40px] px-[48px] relative size-full to-[#f3f4f6] via-1/2 via-white" data-name="Container">
      <Container1 />
    </div>
  );
}