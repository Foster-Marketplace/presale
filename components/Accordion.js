import * as React from 'react';
import { Container, Grid } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Grid
        item
        container
        md={6}
        direction="column"
        id="FAQ"
      >
        <Typography
          style={{
            marginBottom: '70px',
            fontSize: 72,
            color: '#ffffff',
            fontWeight: 'bold'
          }}>
          <div style={{ color: "#999999", fontSize: "18px" }}>FAQ</div>
          <div>Get the
            <label style={{
              paddingLeft: "20px",
              color: "#536aba"
            }}>Facts</label></div>
        </Typography>
      </Grid>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            What are the benefits of holding a Bunny Freak?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            Access to private community channels. Voting rights to the most important questions in the short film creative process (animation style, plots, ending etc). Each voter will get their real or alias name written in the closing credits of the short film as a contributor. Lastly, your NFT will also act as a online movie ticket to the world's first community driven animation short film for life - we'll let the community decide if non-holders will have to pay a fee or buy a Bunny Freak to view and experience our historic short film!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            When will the animation shortfilm come out?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            After minting is completed, the creative process will take up to 6 months. We will keep the community engaged with shortfilm related questions and updates throughout our journey!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            How many Bunny Freaks will there be?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            10,000 Bunny Freaks. We are reserving 100 randomized Bunny Freaks for Influencers and Giveaways.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            When is the launch?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            11th of October 2021 at 8PM CET (11AM Pacific Time)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            How much does it cost to mint a Bunny Freak?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            3 SOL
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            Will there be a pre-sale?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            Yes. Active community members will have an advantage minting Bunny Freaks. Relevant information will be shared in our Discord Announcement channel before the day of launch.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            How can I get one?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            Head over to our MINT section from the menu top right of this page. When the counter runs out. You will be able to buy your Bunny Freaks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            How can I trade my Bunny Freaks?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            We will be adding Bunny Freaks to NFT marketplaces like <a href="https://digitaleyes.market/" style={{ textDecoration: 'none', color: '#536aba' }}>https://digitaleyes.market/</a>, <a href="https://solanart.io/" style={{ textDecoration: 'none', color: '#536aba' }}>https://solanart.io/</a> and <a href="http://solsea.io/" style={{ textDecoration: 'none', color: '#536aba' }}>http://solsea.io/</a> - acceptance times will vary. In most of these marketplaces you can connect your wallet, click "SELL" on your wallet page and list it or buy from the collection section. Please be aware of scams and don't fall for collections that have not been approved within our Discord Announcements channel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            Does owning a Bunny Freak NFT give us commercial use rights?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            No. The commercial use rights of Bunny Freaks art pieces and animation short film belong to the creators of the Bunny Freaks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography className="Accordion-title" sx={{ width: '33%', flexShrink: 0 }}>
            Are there secondary sale royalties?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            Yes, royalties are set at 4%. We will be contributing 10% of this back into the community vault for future Freak Show expansion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}