import { MultipartUpload } from "@effect-aws/s3/MultipartUpload";
import { Effect } from "effect";

const Body =
  "Duo Reges: constructio interrete. Qui autem esse poteris, nisi te amor ipse ceperit? Hoc est non modo cor non habere, sed ne palatum quidem. Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Sed quid attinet de rebus tam apertis plura requirere? Non quam nostram quidem, inquit Pomponius iocans; Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Stoici scilicet";

const program = MultipartUpload.uploadObject({
  Bucket: "my-bucket",
  Key: "my-object",
  Body,
});

program.pipe(
  Effect.provide(MultipartUpload.Default),
  Effect.runPromise,
);
