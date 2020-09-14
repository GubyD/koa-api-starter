module.exports = {
    async create(ctx) {
        try {

            // if (!ctx.request.body.title) {
            //     ctx.throw(400, 'please provide the job title');
            // }

            // if (!ctx.request.body.CompanyId) {
            //     ctx.throw(400, 'please provide the CompanyId');
            // }

            const candidate = await ctx.db.Candidate.create({
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                email: ctx.request.body.email
            });

            ctx.body = await ctx.db.Application.create({
                JobId: ctx.request.body.JobId,
                CandidateId: candidate.id
            });

        } 
        catch (err) {
            ctx.throw(500, err);
        }
    }
};