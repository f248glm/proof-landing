import Image from "next/image";

const imgVector =
  "https://www.figma.com/api/mcp/asset/1f07aca8-30e2-436c-a958-cb5e52d0d73e";
const imgEllipse1 =
  "https://www.figma.com/api/mcp/asset/4cfb106c-c194-48e5-b6ef-2cb561c5017e";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/7ea10dd9-e403-4dcb-800c-ecbdaf49cc1d";
const imgFrame3 =
  "https://www.figma.com/api/mcp/asset/ba5b389d-beef-4c21-acd8-240bf2074060";

// Payment features assets
const imgScreenshot1 = "https://www.figma.com/api/mcp/asset/2766ce79-c676-40c1-bf0d-d280e516d3fa";
const imgScreenshot3 = "https://www.figma.com/api/mcp/asset/8cfb8854-3620-484b-a1b4-bd1877a676e6";
const imgGroup = "https://www.figma.com/api/mcp/asset/f488bd63-3ee7-4f88-9ec2-e92e64e70e0d";
const imgSpeakerCutout = "https://www.figma.com/api/mcp/asset/67ff4b60-6d33-4a33-8200-695e8ff9737b";
const imgAntennaBands = "https://www.figma.com/api/mcp/asset/9629f533-9927-474b-804c-356cf59fe685";
const imgScreenshot = "https://www.figma.com/api/mcp/asset/144c97a6-3d6d-4a8b-b8d6-bd991879f399";
const imgCamera = "https://www.figma.com/api/mcp/asset/a4d60deb-f7b3-4b3c-8bb6-7d82409a2f2a";
const imgSpeakerCutout1 = "https://www.figma.com/api/mcp/asset/2c9a6601-56d3-4481-ab1c-e489949390b1";
const imgScreenshot2 = "https://www.figma.com/api/mcp/asset/145f3d30-8878-49c9-ad59-0b3c7f3aa0c6";
const imgCamera1 = "https://www.figma.com/api/mcp/asset/fe2ea508-bfd5-4bf5-8239-1a4cc2d09948";

function PhoneMockup() {
  return (
    <div className="bg-black/[0.03] rounded-[23px] w-[500px] h-[600px] relative overflow-hidden">
      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[373px] h-[766px]">
        <div className="relative w-full h-full bg-gradient-to-b from-[#f9f6f3] to-[#bbb7b3] rounded-[72px] p-[10px]">
          <div className="w-full h-full bg-black rounded-[67px] relative overflow-hidden">
            <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[108px] h-[34px] bg-black rounded-full">
              <div className="absolute right-[8px] top-[8px] w-[17px] h-[17px]">
                <Image alt="Camera" src={imgCamera} width={17} height={17} />
              </div>
            </div>
            <div className="absolute inset-[13px] overflow-hidden rounded-[60px]">
              <Image
                alt="App screenshot"
                src={imgScreenshot1}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fbfaf4] relative min-h-screen">
      <nav className="flex items-center justify-between px-[120px] py-[28px] w-full">
        <div className="h-[20px] w-[118px] relative">
          <Image
            alt="Proof logo"
            src={imgFrame3}
            fill
            className="object-contain"
            sizes="118px"
          />
        </div>
        <button className="bg-[#00070e] text-[#dcff9b] px-6 py-2 rounded-full font-semibold text-[20px] tracking-[-0.1px] transition-opacity hover:opacity-90">
          Download
        </button>
      </nav>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="w-[1000px] mx-auto pt-[48px] pb-[100px]">
          <section className="flex flex-col items-center gap-[60px] w-[679px] mx-auto">
            <div
              className="w-[429px] h-[270px] cursor-pointer p-[20px]"
              style={{ perspective: "1000px" }}
              id="card-container"
            >
              <div
                className="bg-[#dcff9b] border border-black/[0.17] rounded-[13px] shadow-[0px_0px_182px_0px_rgba(0,7,14,0.07)] p-[20px] relative overflow-hidden w-full h-full transition-transform duration-300 ease-out"
                id="proof-card"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glare effect */}
                <div
                  className="absolute inset-0 rounded-[13px] pointer-events-none opacity-0 transition-opacity duration-300 ease-out"
                  id="glare"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 60%)",
                  }}
                ></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[133px] h-[134px]">
                  <Image
                    alt="Card design"
                    src={imgVector}
                    fill
                    className="object-contain"
                    sizes="133px"
                  />
                </div>
                <div className="absolute bottom-[20px] right-[20px] flex items-center">
                  <div className="w-[39px] h-[39px] -mr-[15px] relative">
                    <Image
                      alt="Circle"
                      src={imgEllipse1}
                      fill
                      className="object-contain"
                      sizes="39px"
                    />
                  </div>
                  <div className="w-[39px] h-[39px] relative">
                    <Image
                      alt="Circle"
                      src={imgEllipse1}
                      fill
                      className="object-contain"
                      sizes="39px"
                    />
                  </div>
                </div>
                <div className="absolute top-[19px] left-[19px] w-[90px] h-[15px]">
                  <Image
                    alt="Logo"
                    src={imgVector1}
                    fill
                    className="object-contain"
                    sizes="90px"
                  />
                </div>
                <p className="absolute bottom-[19px] left-[19px] text-[#252525] text-[18px] font-normal">
                  •••• 1909
                </p>
              </div>
            </div>

            <div className="text-center w-full">
              <h1 className="text-[56px] font-bold text-primary-text leading-[80px] tracking-[-0.4px] mb-[16px] font-manrope">
                Spend Crypto Like Cash
              </h1>
              <p className="text-[22px] font-medium text-secondary-text tracking-[0.3px] font-manrope">
                A virtual Mastercard that turns your crypto into everyday
                spending. Pay online, tap in stores with Apple Pay and Google
                Pay.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="flex flex-col items-center gap-[16px] w-[679px] mx-auto mt-[50px]">
            <button className="bg-[#00070e] text-[#dcff9b] px-[24px] py-[15px] rounded-full font-semibold text-[24px] tracking-[-0.1px] font-manrope transition-opacity hover:opacity-90">
              Download
            </button>
            <p className="text-[18px] font-medium text-secondary-text tracking-[0.3px] font-manrope text-center">
              iOS & Android available
            </p>
          </section>

          {/* But First, Get Paid Section */}
          <section className="text-center mt-[200px] mb-[113px]">
            <h2 className="text-[48px] font-bold text-primary-text leading-[56px] tracking-[-0.2px] font-manrope">
              But First, Get Paid
            </h2>
          </section>

          {/* Payment Features Grid */}
          <section className="flex gap-[20px] items-end mb-[200px]">
            <div className="flex flex-col gap-[20px] w-[456px] h-[707px]">
              {/* Payment Link Card */}
              <div className="bg-black/[0.03] rounded-[23px] flex-1 relative overflow-hidden">
                {/* Green icon circle */}
                <div className="absolute top-[30px] left-[24px] bg-[#dcff9b] rounded-full w-[100px] h-[100px] flex items-center justify-center">
                  <div className="w-[56px] h-[56px] relative">
                    <Image
                      alt="Link icon"
                      src={imgGroup}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                </div>
                {/* Text content */}
                <div className="absolute bottom-[24px] left-[24px] w-[398px]">
                  <h3 className="text-[24px] font-semibold text-[#00070e] mb-[10px] font-manrope tracking-[0.3px]">
                    Get Paid with Your Payment Link
                  </h3>
                  <p className="text-[20px] font-medium text-[#808385] tracking-[0.3px] font-manrope">
                    Copy your link and send it to anyone — clients, friends, followers.
                  </p>
                </div>
              </div>

              {/* QR Code Card */}
              <div className="bg-black/[0.03] rounded-[23px] h-[398px] relative overflow-hidden">
                {/* iPhone showing QR code */}
                <div className="absolute top-[-58.1%] left-1/2 transform -translate-x-1/2 w-[233.749px] h-[479.956px]">
                  <div className="relative w-full h-full">
                    {/* Phone base */}
                    <div className="absolute inset-[0_0.7%] bg-gradient-to-b from-[#f9f6f3] to-[#bbb7b3] rounded-[72px] pointer-events-none shadow-[inset_0px_0px_0.591px_1.087px_rgba(0,0,0,0.2),inset_0px_0px_0.887px_1.087px_rgba(0,0,0,0.4)]" />
                    {/* Phone bezel */}
                    <div className="absolute inset-[0.62%_1.98%] bg-black rounded-[67px] border-[0.544px] border-black shadow-[0px_0px_1.631px_1px_rgba(255,255,255,0.25)] pointer-events-none">
                      <div className="absolute inset-[-0.544px] rounded-[inherit] shadow-[inset_0px_0px_0.272px_2px_#3c3c3c]" />
                    </div>
                    {/* Speaker cutout */}
                    <div className="absolute top-[0.57%] left-[40.12%] right-[40.12%] bottom-[99.09%]">
                      <Image
                        alt=""
                        src={imgSpeakerCutout}
                        fill
                        className="object-contain"
                        sizes="47px"
                      />
                    </div>
                    {/* Antenna bands */}
                    <div className="absolute left-[1.64px] top-[0.02px] w-[230.466px] h-[479.956px]">
                      <Image
                        alt=""
                        src={imgAntennaBands}
                        fill
                        className="object-contain"
                        sizes="230px"
                      />
                    </div>
                    {/* Screen */}
                    <div className="absolute inset-[1.76%_4.3%] rounded-[60px] overflow-hidden">
                      <Image
                        alt="QR code screen"
                        src={imgScreenshot1}
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                    {/* Dynamic Island */}
                    <div className="absolute top-[3.06%] left-1/2 transform -translate-x-1/2 bg-black rounded-full w-[67.95px] h-[34px]">
                      <div className="absolute right-[8px] top-[4.89px] w-[10.872px] h-[10.872px]">
                        <Image
                          alt="Camera"
                          src={imgCamera}
                          fill
                          className="object-contain"
                          sizes="11px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Text content */}
                <div className="absolute bottom-[24px] left-[24px] w-[398px]">
                  <h3 className="text-[24px] font-semibold text-[#00070e] mb-[10px] font-manrope tracking-[0.3px]">
                    Or Share a QR Code
                  </h3>
                  <p className="text-[20px] font-medium text-[#808385] tracking-[0.3px] font-manrope">
                    Generate a QR code for in-person payments or to drop into your social bio.
                  </p>
                </div>
              </div>
            </div>

            {/* They Pay Their Way Card */}
            <div className="bg-black/[0.03] rounded-[23px] flex-1 h-[707px] relative overflow-hidden">
              {/* Large iPhone showing payment options */}
              <div className="absolute top-[-199px] left-1/2 transform -translate-x-1/2 w-[348.188px] h-[715px]">
                <div className="relative w-full h-full">
                  {/* Phone base */}
                  <div className="absolute inset-[0_0.7%] bg-gradient-to-b from-[#f9f6f3] to-[#bbb7b3] rounded-[72px] pointer-events-none shadow-[inset_0px_0px_1.311px_1.619px_rgba(0,0,0,0.2),inset_0px_0px_1.967px_1.619px_rgba(0,0,0,0.4)]" />
                  {/* Phone bezel */}
                  <div className="absolute inset-[0.62%_1.98%] bg-black rounded-[67px] border-[0.81px] border-black shadow-[0px_0px_2.429px_1px_rgba(255,255,255,0.25)] pointer-events-none">
                    <div className="absolute inset-[-0.81px] rounded-[inherit] shadow-[inset_0px_0px_0.405px_2px_#3c3c3c]" />
                  </div>
                  {/* Speaker cutout */}
                  <div className="absolute top-[0.57%] left-[40.12%] right-[40.12%] bottom-[99.09%]">
                    <Image
                      alt=""
                      src={imgSpeakerCutout1}
                      fill
                      className="object-contain"
                      sizes="69px"
                    />
                  </div>
                  {/* Antenna bands */}
                  <div className="absolute left-[2.44px] top-[0.03px] w-[343.299px] h-[714.934px]">
                    <Image
                      alt=""
                      src={imgAntennaBands}
                      fill
                      className="object-contain"
                      sizes="343px"
                    />
                  </div>
                  {/* Screen */}
                  <div className="absolute inset-[1.76%_4.3%] rounded-[60px] overflow-hidden">
                    <Image
                      alt="Payment options screen"
                      src={imgScreenshot3}
                      fill
                      className="object-cover"
                      sizes="332px"
                    />
                  </div>
                  {/* Dynamic Island */}
                  <div className="absolute top-[3.06%] left-1/2 transform -translate-x-1/2 bg-black rounded-full w-[101.217px] h-[34px]">
                    <div className="absolute right-[12px] top-[7.29px] w-[16.195px] h-[16.195px]">
                      <Image
                        alt="Camera"
                        src={imgCamera1}
                        fill
                        className="object-contain"
                        sizes="16px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Text content */}
              <div className="absolute bottom-[24px] left-[24px] w-[398px]">
                <h3 className="text-[24px] font-semibold text-[#00070e] mb-[10px] font-manrope tracking-[0.3px]">
                  They Pay Their Way
                </h3>
                <p className="text-[20px] font-medium text-[#808385] tracking-[0.3px] font-manrope">
                  Sender picks what's convenient — crypto, card, or bank transfer. You receive USDT directly on your Proof Card.
                </p>
              </div>
            </div>
          </section>

          {/* Pay Anyone Section */}
          <section className="text-center mb-[113px]">
            <h2 className="text-[48px] font-bold text-primary-text leading-[56px] tracking-[-0.2px] font-manrope">
              Pay Anyone on Proof by @username
            </h2>
          </section>

          {/* Payment Username Features */}
          <section className="flex gap-[20px] h-[360px]">
            <div className="bg-black/[0.03] rounded-[23px] flex-1 p-[24px] flex flex-col justify-end">
              <div className="w-[398px]">
                <h3 className="text-[24px] font-semibold text-primary-text mb-[10px] font-manrope">
                  Get Paid with Your Payment Link
                </h3>
                <p className="text-[20px] font-medium text-secondary-text tracking-[0.3px] font-manrope">
                  Copy your link and send it to anyone — clients, friends,
                  followers.
                </p>
              </div>
            </div>
            <div className="bg-black/[0.03] rounded-[23px] flex-1 p-[24px] flex flex-col justify-end">
              <div className="w-[398px]">
                <h3 className="text-[24px] font-semibold text-primary-text mb-[10px] font-manrope">
                  Or Share a QR Code
                </h3>
                <p className="text-[20px] font-medium text-secondary-text tracking-[0.3px] font-manrope">
                  Generate a QR code for in-person payments or to drop into your
                  social bio.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('card-container');
            const card = document.getElementById('proof-card');
            const glare = document.getElementById('glare');

            if (container && card && glare) {
              container.addEventListener('mousemove', function(e) {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / centerY * -20;
                const rotateY = (x - centerX) / centerX * 20;

                card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = 'radial-gradient(circle at ' + glareX + '% ' + glareY + '%, rgba(255,255,255,0.5) 0%, transparent 60%)';
                glare.style.opacity = '1';
              });

              container.addEventListener('mouseleave', function() {
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                glare.style.opacity = '0';
              });
            }
          });
        `,
        }}
      />
    </div>
  );
}
