import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(8,112,224)" : "rgb(8,112,224)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(82, 35, 35, 0.494)",
}));

export default function HomeText() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [expended2, setExpended2] = React.useState("panel12");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange2 = panel2 => (event2, newExpanded2) => {
    setExpended2(newExpanded2 ? panel2 : false);
  };
  return (
    <div>
      <div
        style={{
          marginTop: "6%",
          fontSize: "22px",
          color: " rgb(62, 61, 61)",
          marginLeft: "29%",
          width: "660px",
          marginBottom: "4%",
          // backgroundColor: " rgb(180, 178, 178)",
        }}>
        <h2>Adapt the apartment for dogs and cats</h2> Before you, as a dog
        owner, bring a cat into your household - or vice versa - you should
        consider a few things so that everything is prepared for both the
        newcomer and your existing pet. To ensure that both animals do not get
        in each other's enclosure, you should prepare the following places
        accordingly:
      </div>
      <div
        style={{
          width: "950px",
          marginLeft: "20%",
        }}>
        <Accordion
          expanded2={expended2 === "panel12"}
          onChange={handleChange2("panel12")}>
          <AccordionSummary
            aria-controls="panel12d-content"
            id="panel12d-header">
            <Typography>feeding places</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The feeding stations for dogs and cats should be separated from
              each other. Only when the animals feel undisturbed and safe can
              they eat in peace. If both bowls are next to each other, it is
              possible that one of the animals does not touch the food - or both
              feeding bowls are emptied by one animal. If possible, the cat's
              food bowl can be placed higher.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>litter box</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The litter box must be in a quiet place and not accessible to the
              dog. On the one hand, cats need their privacy when doing their
              business, on the other hand, the dog should not have the
              opportunity to eat the cat's excrement. If this is not guaranteed,
              the cat may react by not using the litter box.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Resting place / place of retreat</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Both pets need a safe retreat where they can rest and sleep. Cats
              often need more rest, which is why it helps if a room is only
              accessible to the cat.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div
        style={{
          marginTop: "6%",
          fontSize: "22px",
          color: " rgb(62, 61, 61",
          marginLeft: "29%",
          width: "660px",
          marginBottom: "4%",
          // backgroundColor: " rgb(180, 178, 178)",
        }}>
        <h2> Which dogs and cats go well together? </h2>
        With your pet, you may be able to assess whether it gets along with the
        other animal because it has already had contact with the other species.
        A few facts definitely make the integration of dogs and cats easier:
      </div>
      <div
        style={{
          width: "950px",
          marginLeft: "20%",
        }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Both animals should be about the same age</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              So there is no risk of one animal oppressing the other. The
              younger both animals are, the easier it is for them to get used to
              the other pet and see their presence as “normal”. For adult dogs,
              the cat should be four months or older. And a second "senior"
              suits the aged animal better than a lively young animal.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>The character has to be right</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Each animal has its own character. If a second pet moves in with
              you, both animals should be similar in character. With a lively
              dog, a shy cat will hardly dare to come out from under the bed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Experiences with the other kind decide about a good coexistence
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Positive experiences with the other animal species are
              advantageous for a combination. If one of the animals has had
              negative experiences with the other species, integration into the
              household could become more difficult. In the case of pets from
              the animal shelter , the behavior towards other animals is usually
              known.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div
        style={{
          marginTop: "6%",
          fontSize: "22px",
          color: " rgb(62, 61, 61",
          // marginLeft: "13%",
          width: "800px",
          marginBottom: "4%",
        }}>
        <div
          style={{
            width: "175%",
            backgroundColor: " rgb(156, 155, 155)",
            color: "rgb(8,112,224)",
            marginLeft: "20px",
            paddingLeft: "70px",
          }}>
          <h2
            style={{
              marginLeft: "20%",
              PaddingTop: "20px",
            }}>
            Which dog breeds get along best with cats?
          </h2>
          These breeds are particularly friendly towards other animals. They are
          also considered curious, playful and very adaptable to new situations:
          Dachshund, German and Swiss Shepherd, Labrador, Cocker Spaniel, Pug,
          Border Collie, Basset Hound, Beagle, Golden Retriever.
        </div>
        <div
          style={{
            width: "120%",
            marginLeft: "35%",
          }}>
          <div>
            <h2>How to prepare your dog and cat against each other</h2>You can
            use your sense of smell or hearing to prepare your pet for the new
            addition before it actually moves in with you. For your dog, you can
            bring a scent sample of the soon-to-be roommate from the breeder or
            animal shelter by rubbing the new addition's fur with a cloth. You
            then place this scent label in the apartment where your four-legged
            friend will definitely notice the smell. Perhaps associate this new
            smell with giving treats. In this way, your pet associates a
            positive experience with this new sensory stimulus.
          </div>
          <div>
            <h2>Who was there first - cat or dog?</h2>Dogs and cats can get used
            to each other, even if one pet is new and the other has been in the
            family for a while. How quickly the reunion works often depends on
            which animal was there first. Because dogs are pack animals, they
            tend to be more open to new “family members” than cats. Domestic
            cats in particular can initially have problems with having to share
            their own territory.
          </div>
          <div>
            <h2>The new pet is moving in</h2>First, your new pet moves into a
            separate room. Everything is new for the animal now. It has to
            arrive first, to process the new stimuli and the move to a new home.
            Then the newcomer can explore the rest of the apartment, but without
            direct contact with the animal roommate. This is important so that
            both animals can get used to the now constantly present smell of the
            other.
          </div>
          <div>
            <h2>The meeting of dog and cat</h2>
            Now choose a neutral place for the cat and dog to get to know each
            other. So that doesn't mean one's cuddly blanket or the space in
            front of the litter box. None of the animals should feel pressured
            in their retreat. Create a relaxed atmosphere for both pets:{" "}
            <ul>
              <li>
                Feeding: Feed both pets ahead of time so they'll be full and
                happy when they get to know each other.
              </li>
              <li>
                Utilization: Play extensively with both animals before the first
                contact. This allows the animals to get rid of any pent-up
                energy.
              </li>
              <li>
                Leash: Leash your dog to ensure a safe distance between the two
                animals in case one tries to attack the other.
              </li>
              <li>
                Escape opportunities: There should be enough opportunities for
                the cat to hide or to get to safety on an elevated position.
              </li>
              <li>
                Second person: If possible, arrange for a second trusted person
                to be present so that each animal has its own “reference person”
              </li>
            </ul>
            Now keep the dog on a leash and let the cat into the room with you.
            Both animals should be able to observe each other from a safe
            distance without one chasing the other. In the best case, the
            animals approach curiously. If both animals accept each other's
            presence without fleeing, hissing, or barking, it's a good sign. Any
            behavior that is neutral or positive should be generously rewarded
            with encouragement and treats . However, you should give treats to
            both pets so that there is no jealousy.
          </div>
        </div>
      </div>
    </div>
  );
}
