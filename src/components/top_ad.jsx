import React, { Component } from "react";
import styled from "react-emotion";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "loaderxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = ((dt + Math.random() * 16) % 16) | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

const getPixels = p => {
  let c = [];
  if (p)
    p.split("||").forEach((pixel, index) => {
      c.push(pixel);
    });
  return c;
};

const AnimatedLine = styled.div({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "2px",
  transition: "transform .2s ease-in-out",
  transform: "scaleX(0)",
});

const Container = styled.div({
  position: "relative",
  padding: "0 20px",
  margin: "20px 0",
  [`:hover ${AnimatedLine}`]: {
    transform: "scaleX(1)",
  },
});

const AdLink = styled.a({
  textDecoration: "none",
});
const SponsoredBy = styled.div({
  position: "absolute",
  top: "-12px",
  display: "block",
  padding: "5px",
  border: "1px solid currentColor",
  borderRadius: "3px",
  color: "#111",
  textTransform: "uppercase",
  letterSpacing: ".75px",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "1",
});

const Description = styled.p({
  color: "#111",
  lineHeight: "1.3",
});

const EmptyImage = styled.img({
  display: "none",
});

const CTAButton = styled.div({
  padding: "6px 8px 5px",
  border: "solid 1px currentColor",
  borderRadius: "3px",
  backgroundColor: "#fff",
  textAlign: "center",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  letterSpacing: ".5px",
  fontSize: "12px",
});

const Content = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

class TopAd extends Component {
  state = {
    ad: null,
  };
  async componentDidMount() {
    const generatedName = create_UUID();
    window[generatedName] = ({ ads }) => {
      const filteredAds = ads.filter(ad => {
        return !isEmpty(ad) && ad.statlink;
      });
      this.setState({
        ad: filteredAds[0],
      });
    };
    const jsonUrl = `https://srv.buysellads.com/ads/CKYIT2JM.json?callback=${generatedName}`;
    const srv = document.createElement("script");
    srv.src = jsonUrl;
    document.getElementsByTagName("head")[0].appendChild(srv);
  }

  render() {
    if (!this.state.ad) return null;

    const {
      active,
      description,
      backgroundColor,
      backgroundHoverColor,
      bannerid,
      callToAction,
      company,
      creativeid,
      ctaBackgroundColor,
      ctaBackgroundHoverColor,
      ctaTextColor,
      ctaTextColorHover,
      evenodd,
      height,
      i,
      image,
      logo,
      longimp,
      longlink,
      pixel,
      statimp,
      statlink,
      textColor,
      textColorHover,
      title,
    } = this.state.ad;

    if (active !== "1") return null;

    const pixels = getPixels(pixel);

    return (
      <Container
        css={{
          background: `repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .03) 5px, hsla(0, 0%, 0%, .03) 10px) #fafafa0D`,
        }}
      >
        <AdLink href={statlink}>
          <SponsoredBy
            css={{
              backgroundColor: backgroundColor,
              color: textColor,
              ":hover": {
                backgroundColor: backgroundHoverColor,
                color: textColorHover,
              },
            }}
          >
            Sponsored by {company}
          </SponsoredBy>
          <Content>
            <Description>{description}</Description>
            <CTAButton
              css={{
                color: ctaTextColor,
                backgroundColor: ctaBackgroundColor,
                ":hover": { color: ctaTextColorHover, backgroundColor: ctaBackgroundHoverColor },
              }}
            >
              {callToAction}
            </CTAButton>
          </Content>
        </AdLink>
        {map(pixels, pixel => <EmptyImage src={pixel} />)}
        <AnimatedLine css={{ backgroundColor: backgroundHoverColor }} />
      </Container>
    );
  }
}

export default TopAd;
