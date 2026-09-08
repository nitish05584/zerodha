import React from "react";
import { FaTelegramPlane, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-10 py-10 shadow">
      <div className="max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-5 gap-8 ">
        
        {/* Empty / Logo Column */}
        <div>
        <img
          src="https://raw.githubusercontent.com/SKSingh0703/Zerodha-Clone/049b30a87bcd54ce95a887afcd0d4672c30f3c47/frontend/public/media/images/logo.svg"
          alt="Logo"
          className="w-32 sm:w-36 md:w-40"
        />

        <p className="pt-4 text-gray-700">@ 2010-2026, Zerodha Broking Ltd.</p>
        <p className="pt-4 text-gray-700"
        >All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 pt-5 text-2xl text-gray-600">
          <FaTelegramPlane className="cursor-pointer hover:text-blue-500 transition duration-300" />
          
          <FaYoutube className="cursor-pointer hover:text-red-500 transition duration-300" />
          
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
        </div>
      </div>

        <div>
          <h1 className="font-semibold text-lg mb-4">Account</h1>
          <div className="space-y-2 text-gray-600">
            <p>Open demat account</p>
            <p>Minor demat account</p>
            <p>NRI demat account</p>
            <p>HUF demat account</p>
            <p>Commodity</p>
            <p>Dematerialisation</p>
            <p>Fund transfer</p>
            <p>MTF</p>
          </div>
        </div>

       
        <div>
          <h1 className="font-semibold text-lg mb-4">Support</h1>
          <div className="space-y-2 text-gray-600">
            <p>Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
            <p>Bulletin</p>
            <p>Circular</p>
            <p>Z-Connect blog</p>
            <p>Downloads</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-lg mb-4">Company</h1>
          <div className="space-y-2 text-gray-600">
            <p>About</p>
            <p>Philosophy</p>
            <p>Press & media</p>
            <p>Careers</p>
            <p>Zerodha Cares (CSR)</p>
            <p>Zerodha.tech</p>
            <p>Open source</p>
            <p>Referral program</p>
          </div>
        </div>

       
        <div>
          <h1 className="font-semibold text-lg mb-4">Quick links</h1>
          <div className="space-y-2 text-gray-600">
            <p>Upcoming IPOs</p>
            <p>Brokerage charges</p>
            <p>Market holidays</p>
            <p>Economic calendar</p>
            <p>Calculators</p>
            <p>Markets</p>
            <p>Sectors</p>
            <p>Gift Nifty</p>
          </div>
        </div>

     

      </div>

         <p className="pt-15 text-gray-400">Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances

Smart Online Dispute Resolution | Grievances Redressal Mechanism

Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

India's largest broker based on networth as per NSE. NSE broker factsheet

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.

*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.

Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum,</p>
    </div>
  );
};

export default Footer;