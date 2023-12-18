import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQRCode } from "next-qrcode";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button, CardContent } from "@mui/material";
import { createCanvas } from "canvas";

const Success = () => {
  const location = useLocation();
  const { Canvas } = useQRCode();
  const canvasRef = useRef(null);
  const downloadLinkRef = useRef(null);

  const { result } = location.state || {};
  console.log(result);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");

    // Set the href and download attributes of the anchor tag
    downloadLinkRef.current.href = dataUrl;
    downloadLinkRef.current.download = "qrcode.png";

    // Programmatically click the anchor tag
    downloadLinkRef.current.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const handleLoad = () => {
      // Call the downloadQRCode function after the canvas has fully loaded
      downloadQRCode();
    };

    if (canvas) {
      canvas.addEventListener("load", handleLoad);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (canvas) {
        canvas.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <Box>
      <Card>
        <CardContent>
          <h3>Your QR Code</h3>
          <Canvas
            id="qrcode-canvas"
            text={result}
            options={{
              errorCorrectionLevel: "M",
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: "#000000FF",
                light: "#FFFFFFFF",
              },
            }}
            canvasRef={canvasRef}
          />
        </CardContent>

        {/* Hidden anchor tag */}
        <a ref={downloadLinkRef} style={{ display: "none" }} />

        {/* Button to trigger download */}
        <Button onClick={downloadQRCode}>Download QR Code</Button>
      </Card>
    </Box>
  );
};

export default Success;
